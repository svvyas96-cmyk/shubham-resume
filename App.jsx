import { motion } from 'framer-motion';

export default function App() {
  const skills = [
    'Java', 'Selenium', 'TestNG', 'Cucumber', 'Rest Assured',
    'Appium', 'Cypress', 'Jenkins', 'Postman', 'JIRA'
  ];

  const projects = [
    'Web Automation Framework using Selenium + TestNG',
    'API Automation using Rest Assured',
    'Mobile Testing with Appium',
    'UI Automation with Cypress'
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="rounded-2xl shadow-2xl bg-slate-900 border border-slate-800 p-8">
            <h1 className="text-5xl font-bold">Shubham Vyas</h1>
            <p className="text-sm text-slate-400 mt-1">Automation • API • Mobile Testing</p>
            <p className="text-xl text-slate-300 mt-2">QA Engineer | Automation Tester</p>
            <div className="mt-4 grid md:grid-cols-2 gap-2 text-sm text-slate-400">
              <p>📍 Bengaluru, Karnataka</p>
              <p>📞 +91 8770216431</p>
              <p>✉️ vyass4800@gmail.com</p>
              <p>🔗 linkedin.com/in/shubham-vyas96</p>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="/Shubham_Vyas_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="px-4 py-2 rounded-xl bg-white text-black">Download Resume</button>
              </a>
              <a href="https://www.linkedin.com/in/shubham-vyas96" target="_blank" rel="noopener noreferrer">
                <button className="px-4 py-2 rounded-xl bg-slate-700">LinkedIn</button>
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
              <h2 className="text-2xl font-semibold mb-3">Professional Summary</h2>
              <p className="text-slate-300 leading-relaxed">
                Results-driven QA Engineer with 4 years of experience in Automation and Manual Testing across web, API, and mobile applications.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
              <h2 className="text-2xl font-semibold mb-3">Work Experience</h2>
              <h3 className="text-xl font-medium">Associate Consultant - Capgemini</h3>
              <p className="text-slate-400 mb-3">Sept 2021 - Present</p>
              <ul className="list-disc ml-5 text-slate-300 space-y-2">
                <li>Built automation framework using Selenium + Java + TestNG</li>
                <li>Performed API automation with Rest Assured and Postman</li>
                <li>Handled regression, functional, integration and performance testing</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
              <h2 className="text-2xl font-semibold mb-3">Projects</h2>
              <ul className="space-y-2 text-slate-300">
                {projects.map((project) => <li key={project}>• {project}</li>)}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
              <h2 className="text-2xl font-semibold mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-800 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
