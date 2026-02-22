import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            
            <Card className="bg-card/50 border-white/10 backdrop-blur-sm mb-8">
              <CardContent className="pt-6 text-muted-foreground space-y-6">
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
                  <p>
                    We collect information that you provide directly to us, such as when you fill out our contact form. This information may include your name, email address, phone number, and any other information you choose to provide.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
                  <p>
                    We use the information we collect to respond to your inquiries, provide the services you request, and improve our website and services.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">3. Information Sharing</h2>
                  <p>
                    We do not share your personal information with third parties except as necessary to provide our services or as required by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">4. Security</h2>
                  <p>
                    We take reasonable measures to protect your personal information from loss, theft, misuse, and unauthorized access.
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
