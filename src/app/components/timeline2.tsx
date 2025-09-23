import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { MapPin, FileText, Bell, Zap, Shield, Navigation } from 'lucide-react';

interface DashboardItem {
  id: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const policeItems: DashboardItem[] = [
  { id: 1, icon: MapPin, title: "Live Tourist Tracking", description: "Monitor active users’ real-time locations for rapid emergency response" },
  { id: 2, icon: FileText, title: "Incident Management", description: "View, categorize, and resolve reports submitted by tourists efficiently" },
  { id: 3, icon: Bell, title: "Automated Emergency Alerts", description: "Receive instant notifications for critical incidents in specific zones" },
  { id: 4, icon: Navigation, title: "Smart Resource Allocation", description: "Deploy officers optimally based on live data and ongoing incidents" },
  { id: 5, icon: Shield, title: "Analytics & Insights", description: "Track safety trends, hotspot areas, and recurring issues for better planning" },
  { id: 6, icon: Zap, title: "Direct Communication", description: "Send alerts, instructions, or safety guidance directly to tourists in real time" }
];

const DashboardItemComponent = ({ item, index }: { item: DashboardItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const IconComponent = item.icon;
  const isLeft = index % 2 === 0;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: index * 0.2 } }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: isLeft ? -50 : 50, y: 20 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, delay: index * 0.2 + 0.2 } }
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, delay: index * 0.2 + 0.1 } }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative flex items-center w-full"
    >
      {/* Desktop Layout */}
      <div className="hidden md:flex w-full items-center">
        {isLeft ? (
          <>
            <motion.div variants={cardVariants} className="w-5/12 pr-8">
              <motion.div
                className="group relative bg-white border-l-4 border-blue-400 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            </motion.div>

            <div className="w-2/12 flex justify-center relative z-10">
              <motion.div variants={iconVariants} className="relative">
                <motion.div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center shadow-md relative">
                  <IconComponent className="w-7 h-7 text-blue-500" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-200/20 blur-xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </motion.div>
            </div>

            <div className="w-5/12" />
          </>
        ) : (
          <>
            <div className="w-5/12" />
            <div className="w-2/12 flex justify-center relative z-10">
              <motion.div variants={iconVariants} className="relative">
                <motion.div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center shadow-md relative">
                  <IconComponent className="w-7 h-7 text-blue-500" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-200/20 blur-xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </motion.div>
            </div>
            <motion.div variants={cardVariants} className="w-5/12 pl-8">
              <motion.div
                className="group relative bg-white border-l-4 border-blue-400 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex items-center w-full">
        <motion.div variants={iconVariants} className="relative flex-shrink-0 mr-4">
          <motion.div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shadow-md relative">
            <IconComponent className="w-6 h-6 text-blue-500" />
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-200/20 blur-lg"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

        <motion.div variants={cardVariants} className="flex-1">
          <motion.div
            className="group relative bg-white border-l-4 border-blue-400 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -2, scale: 1.01 }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const PoliceDashboardTimeline = () => {
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-200px" });

  const timelineVariants: Variants = {
    hidden: { height: 0 },
    visible: { height: "100%", transition: { duration: 2, ease: "easeOut", delay: 0.5 } }
  };

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Police Dashboard Features
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Tools designed for authorities to ensure tourist safety efficiently
          </p>
        </motion.div>

        {/* Timeline line */}
        <div className="relative" ref={timelineRef}>
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 w-1 bg-gray-300 h-full rounded">
            <motion.div
              variants={timelineVariants}
              initial="hidden"
              animate={timelineInView ? "visible" : "hidden"}
              className="w-full bg-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.3)] rounded"
            />
          </div>

          <div className="space-y-14 md:space-y-20">
            {policeItems.map((item, index) => (
              <DashboardItemComponent key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoliceDashboardTimeline;
