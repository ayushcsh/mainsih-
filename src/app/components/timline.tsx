import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import {
  Bell,
  MapPin,
  Navigation,
  Zap,
  FileText,
  Wifi,
  Shield
} from 'lucide-react';

interface TimelineItem {
  id: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const timelineItems: TimelineItem[] = [
  { id: 1, icon: Bell, title: "Real-time Alerts", description: "Instant notifications for emergencies or unsafe areas" },
  { id: 2, icon: MapPin, title: "Location Sharing", description: "Share live location with trusted contacts for safety" },
  { id: 3, icon: Navigation, title: "Safe Route Guidance", description: "Navigate safely using suggested paths" },
  { id: 4, icon: Zap, title: "SOS Button", description: "One-tap emergency alerts to authorities" },
  { id: 5, icon: FileText, title: "Incident Reporting", description: "Report suspicious activities or hazards" },
  { id: 6, icon: Wifi, title: "Offline Support", description: "Some functionalities available even without internet" },
  { id: 7, icon: Shield, title: "Personal Safety Score", description: "Insights on the safety of your current location" }
];

const TimelineItemComponent = ({ item, index }: { item: TimelineItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const IconComponent = item.icon;
  const isLeft = index % 2 === 0;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: index * 0.2 } }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: isLeft ? -60 : 60, y: 30 },
    visible: {
      opacity: 1, x: 0, y: 0,
      transition: { duration: 0.7, delay: index * 0.2 + 0.3 }
    }
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: {
      scale: 1, opacity: 1, rotate: 0,
      transition: { duration: 0.6, delay: index * 0.2 + 0.1 }
    }
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
                className="group relative bg-white border-l-4 border-blue-400 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            </motion.div>

            <div className="w-2/12 flex justify-center relative z-10">
              <motion.div variants={iconVariants} className="relative">
                <motion.div
                  className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow-md relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <IconComponent className="w-8 h-8 text-blue-600" />
                  {/* Glowing effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-200/40 blur-xl"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
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
                <motion.div
                  className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow-md relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <IconComponent className="w-8 h-8 text-blue-600" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-200/40 blur-xl"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </motion.div>
            </div>
            <motion.div variants={cardVariants} className="w-5/12 pl-8">
              <motion.div
                className="group relative bg-white border-l-4 border-blue-400 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex items-center w-full">
        <motion.div variants={iconVariants} className="relative flex-shrink-0 mr-6">
          <motion.div
            className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-md relative"
            whileHover={{ scale: 1.1 }}
          >
            <IconComponent className="w-6 h-6 text-blue-600" />
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-200/40 blur-lg"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

        <motion.div variants={cardVariants} className="flex-1">
          <motion.div
            className="group relative bg-white border-l-4 border-blue-400 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const SafetyTimeline = () => {
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-200px" });

  const timelineVariants: Variants = {
    hidden: { height: 0 },
    visible: { height: "100%", transition: { duration: 2, ease: "easeOut", delay: 0.5 } }
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const ctaVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.8, delay: timelineItems.length * 0.2 + 1 }
    }
  };

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tourist Safety Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay alert, share your location, and travel safely with real-time assistance
          </p>
        </motion.div>

        {/* Timeline line */}
        <div className="relative" ref={timelineRef}>
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 w-1 bg-gray-300 h-full">
            <motion.div
              variants={timelineVariants}
              initial="hidden"
              animate={timelineInView ? "visible" : "hidden"}
              className="w-full bg-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            />
          </div>

          <div className="space-y-16 md:space-y-20">
            {timelineItems.map((item, index) => (
              <TimelineItemComponent key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-100 text-blue-600 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
          >
            <Shield className="w-6 h-6" />
            <span>Experience Complete Safety</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SafetyTimeline;
