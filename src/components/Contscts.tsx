import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Contacts = () => {
  const scopeRef = useRef(null);
  useGSAP(
    () => {
      gsap.from(".contacts", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contacts",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: scopeRef },
  );
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-6 py-18 text-center"
      ref={scopeRef}
    >
      <h2 className="contacts text-3xl font-semibold tracking-tight sm:text-4xl">
        Have a project in mind?
      </h2>

      <p className="contacts mx-auto mt-4 max-w-xl text-neutral-400">
        I’m available for freelance frontend and React/TypeScript projects. Send
        me a short message about your idea or existing website.
      </p>

      <div className="contacts mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="mailto:ivandumnytskyi@gmail.com"
          className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-neutral-200"
        >
          Email me
        </a>

        <a
          href="https://www.linkedin.com/in/ivan-dumnytskyi-2259103a6/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium transition hover:bg-white/5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-label="LinkedIn"
          >
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
          </svg>
          LinkedIn
        </a>

        <a
          href="https://github.com/ivandumnytskyi"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium transition hover:bg-white/5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-label="GitHub"
          >
            <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3z" />
          </svg>
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contacts;
