//import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white-500 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full p-4">
        <nav>
          <ul className="flex gap-6 justify-center">
            <li>
              <a
                href="#about"
                className="no-underline text-orange-300 hover:text-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="no-underline text-orange-300 hover:text-blue-500"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="no-underline text-orange-300 hover:text-blue-500"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="no-underline text-orange-300 hover:text-blue-500"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="no-underline text-orange-300 hover:text-blue-500"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="no-underline text-orange-300 hover:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="w-full">
        <section id="about" className="text-center py-10">
          <h1 className="text-3xl font-bold font-mono text-orange-500 flex justify-left">
            Hi, I am {"  "}
            <span className="text-3xl font-mono text-blue-500 flex justify-left">
              PONLORK
            </span>
          </h1>
          <img></img>
          <p className="text-lg">
            Email: ponlork2535@gmail.com | Phone: +855 97 510 8710
          </p>
          <p>Address: Kein Svay, Kandal Province, Cambodia.</p>
          <p>
            I am a third-year student at Institute of Technology of Cambodia
            (ITC) majoring in Computer Science.
          </p>
        </section>

        <section id="experience" className="text-center py-10">
          <h2 className="text-red-500">Work Experience</h2>
          <p>No Experience</p>
        </section>

        <section id="education" className="text-center py-10">
          <h2 className="text-red-500">Education</h2>
          <h3 className="text-blue-500">Bachelor of Computer Science</h3>
          <p>Institute of Technology of Cambodia (ITC), 2022 - Present</p>
        </section>

        <section id="skills" className="text-center py-10">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <table className="w-full border-collapse border border-blue-500">
            <thead>
              <tr className="bg-cyan-200">
                <th className="border border-red-400">Programming Languages</th>
                <th className="border border-red-400">Frameworks</th>
                <th className="border border-red-400">Tools</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-yellow-200">
                <td className="border border-purple-400">
                  JavaScript, TypeScript, Java
                </td>
                <td className="border border-purple-400">
                  Next.js, Node.js, NestJS
                </td>
                <td className="border border-purple-400">Git, Docker, Nginx</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="bg-green-200">
                <td className="border border-pink-500">PHP</td>
                <td className="border border-pink-500">Laravel</td>
                <td className="border border-pink-500">
                  VS Code, Linux experience
                </td>
              </tr>
            </tfoot>
          </table>
        </section>

        <section id="project" className="text-center py-10">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <h3>Student Management System</h3>
          <p>Using C++ to develop a system.</p>
        </section>

        <section id="languages" className="text-center py-10">
          <h2 className="text-2xl font-semibold">Languages</h2>
          <ul>
            <li>Khmer: Mother tongue</li>
            <li>English: Intermediate</li>
          </ul>
        </section>

        <section id="references" className="text-center py-10">
          <h2 className="text-2xl font-semibold">References</h2>
          <p>Available upon request</p>
        </section>

        <section id="contact" className="text-center py-10">
          <h2 className="text-2xl font-semibold">Contact Me</h2>
          <p>Email: ponlork2535@gmail.com</p>
          <p>Phone: +855 97 510 8710</p>
        </section>
      </main>
    </div>
  );
}
