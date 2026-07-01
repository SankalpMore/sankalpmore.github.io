import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'
import { Calendar, EnvelopeSimple, Shield } from '@phosphor-icons/react'

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: '',
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    toast.success('Thank you. Dockio will review your Codex integration request and respond within 24 business hours.')
    setFormData({ name: '', email: '', company: '', inquiryType: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <h1 className="mb-4 text-4xl font-semibold tracking-normal text-slate-950 lg:text-5xl">
            Book a Codex Integration Assessment
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            Tell us where Codex should connect with your repositories, documents, workflows, AWS, Azure, or business
            systems. We will review fit, risk, and deployment path before the call.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="rounded-md border-slate-200 p-8 shadow-none">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Business email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Organization</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(event) => setFormData({ ...formData, company: event.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry-type">Inquiry type</Label>
                  <Select
                    value={formData.inquiryType}
                    onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                  >
                    <SelectTrigger id="inquiry-type">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="codex">OpenAI Codex integration</SelectItem>
                      <SelectItem value="knowledge">Enterprise knowledge integration</SelectItem>
                      <SelectItem value="cloud">AWS or Azure Codex deployment</SelectItem>
                      <SelectItem value="managed">Managed Codex operations</SelectItem>
                      <SelectItem value="vendor">Vendor onboarding discussion</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                    placeholder="Tell us about the repositories, documents, systems, or knowledge workflows Codex should help with..."
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-teal-700 hover:bg-teal-800">
                  Submit assessment request
                </Button>

                <p className="text-center text-xs text-slate-500">
                  We typically respond to enterprise inquiries within 24 business hours.
                </p>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="rounded-md border-slate-200 p-6 shadow-none">
              <h3 className="mb-4 font-semibold text-slate-950">Direct contact</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <EnvelopeSimple className="mt-0.5 h-5 w-5 text-teal-700" />
                  <div>
                    <p className="mb-1 font-medium text-slate-950">Email</p>
                    <a href="mailto:partnerships@dockio.in" className="text-slate-600 transition-colors hover:text-teal-800">
                      partnerships@dockio.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-5 w-5 text-teal-700" />
                  <div>
                    <p className="mb-1 font-medium text-slate-950">Book a call</p>
                    <p className="text-slate-600">30-minute integration discovery calls available</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="rounded-md border-slate-200 p-6 shadow-none">
              <h3 className="mb-4 font-semibold text-slate-950">What happens next?</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                {[
                  'We review your goals, data sources, cloud environment, and risk profile.',
                  'We schedule a discovery call with business and technical stakeholders.',
                  'We outline a Codex integration approach for AWS, Azure, or hybrid cloud.',
                  'We define scope, controls, success criteria, and the next delivery step.',
                ].map((item, index) => (
                  <li key={item} className="flex gap-3">
                    <span className="font-semibold text-teal-700">{index + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="rounded-md border-slate-200 bg-slate-50 p-6 shadow-none">
              <Shield className="mb-4 h-7 w-7 text-teal-700" />
              <h3 className="mb-3 font-semibold text-slate-950">Procurement-ready conversation</h3>
              <p className="text-sm leading-6 text-slate-600">
                We can support architecture reviews, security questionnaires, SOW scoping, vendor onboarding, and
                deployment governance discussions.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
