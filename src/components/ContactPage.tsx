import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from 'react'
import { toast } from 'sonner'
import { EnvelopeSimple, MapPin, Calendar } from '@phosphor-icons/react'

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Thank you for your inquiry. We will respond within 24 hours.')
    setFormData({ name: '', email: '', company: '', inquiryType: '', message: '' })
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Start a Conversation
          </h1>
          <p className="text-lg text-muted-foreground">
            Whether you need AI staff augmentation, project delivery, vendor discussions, or strategic consulting—we're here to help enterprise teams succeed with AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Organization</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry-type">Inquiry Type</Label>
                  <Select
                    value={formData.inquiryType}
                    onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                  >
                    <SelectTrigger id="inquiry-type">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="staffing">AI Staff Augmentation</SelectItem>
                      <SelectItem value="consulting">AI Consulting Project</SelectItem>
                      <SelectItem value="partner">Subcontracting / Partner Discussion</SelectItem>
                      <SelectItem value="project">Enterprise AI Project</SelectItem>
                      <SelectItem value="vendor">Vendor Onboarding Discussion</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your AI initiative, team needs, or partnership opportunity..."
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Submit Inquiry
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We typically respond to enterprise inquiries within 24 business hours.
                </p>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Direct Contact</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <EnvelopeSimple className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Email</p>
                    <a href="mailto:partnerships@dockio.com" className="text-muted-foreground hover:text-accent transition-colors">
                      partnerships@dockio.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Book a Call</p>
                    <p className="text-muted-foreground">30-minute discovery calls available</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Response Time</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Enterprise inquiries are prioritized and typically receive a response within 24 business hours.
              </p>
              <p className="text-sm text-muted-foreground">
                For urgent AI staffing needs, please note "URGENT" in your message subject.
              </p>
            </Card>

            <Card className="p-6 bg-muted/30 border-none">
              <h3 className="font-semibold text-foreground mb-3">What Happens Next?</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent font-semibold">1.</span>
                  <span>We review your inquiry and assess fit</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-semibold">2.</span>
                  <span>Schedule a discovery call to understand needs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-semibold">3.</span>
                  <span>Provide capability overview and proposed approach</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-semibold">4.</span>
                  <span>Discuss engagement structure and next steps</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
