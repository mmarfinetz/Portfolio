import "@/styles/globals.css";
import TechnicalPortfolioSection from "@/components/TechnicalPortfolioSection";

function MotionTestApp() {
  console.log('MotionTestApp loaded - testing framer-motion animations');
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Motion Animation Test
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Testing lazy-loaded framer-motion animations with fallbacks
        </p>
        
        {/* Technical Portfolio Section with Motion Animations */}
        <TechnicalPortfolioSection />
        
        <div className="text-center mt-16 p-4 bg-secondary/10 rounded-lg">
          <p className="text-sm text-muted-foreground">
            ✅ If you see smooth animations when cards appear and when expanding project details, 
            framer-motion is working correctly.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            ✅ If animations are disabled (prefers-reduced-motion), you should see instant transitions.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            ✅ If framer-motion fails to load, fallback components will be used without animation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MotionTestApp;