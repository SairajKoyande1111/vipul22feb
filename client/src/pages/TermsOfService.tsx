import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            
            <Card className="bg-card/50 border-white/10 backdrop-blur-sm mb-8">
              <CardContent className="pt-6 text-muted-foreground space-y-6">
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
                  <p>
                    By accessing or using our website, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">2. Use of the Site</h2>
                  <p>
                    You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">3. Intellectual Property</h2>
                  <p>
                    The content on our website, including text, graphics, logos, and images, is the property of VIP Networks and is protected by copyright and other intellectual property laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">4. Limitation of Liability</h2>
                  <p>
                    VIP Networks will not be liable for any damages of any kind arising from the use of our website, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.
                  </p>
                </section>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
