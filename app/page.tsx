const projects = [
  {
    title: "Insight Dashboard",
    category: "Frontend Engineering",
    description:
      "운영 데이터를 빠르게 파악할 수 있도록 카드, 차트, 필터 인터랙션을 설계한 분석 대시보드입니다.",
    stack: ["Next.js", "TypeScript", "Chart UI", "Design System"],
  },
  {
    title: "Creator Archive",
    category: "Product Development",
    description:
      "콘텐츠를 큐레이션하고 스토리텔링 방식으로 보여주는 반응형 아카이브 플랫폼입니다.",
    stack: ["React", "Content Modeling", "Responsive UI", "SEO"],
  },
  {
    title: "Team Workflow Hub",
    category: "Collaboration Tooling",
    description:
      "작업 흐름과 상태를 한 화면에서 확인할 수 있도록 구성한 협업용 내부 도구입니다.",
    stack: ["Next.js", "UX Writing", "Component Architecture", "Accessibility"],
  },
];

const experiences = [
  {
    period: "2024 - Now",
    title: "Frontend Developer",
    detail: "사용자 흐름을 단순하게 만들고, 유지보수하기 쉬운 UI 구조를 설계합니다.",
  },
  {
    period: "2022 - 2024",
    title: "Product-focused Builder",
    detail: "기획과 디자인 의도를 구현으로 연결하며 서비스 완성도를 높였습니다.",
  },
];

const strengths = [
  "사용자 경험을 먼저 생각하는 인터페이스 설계",
  "읽기 쉬운 컴포넌트 구조와 일관된 스타일링",
  "빠른 프로토타이핑과 세밀한 마감",
  "협업을 고려한 문서화와 커뮤니케이션",
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Developer Portfolio</p>
          <h1>
            아이디어를
            <br />
            매력적인 웹 경험으로 만드는
            <br />
            프론트엔드 개발자
          </h1>
          <p className="hero-text">
            Next.js와 TypeScript를 중심으로, 보기 좋고 사용하기 쉬운 제품을 만드는 데
            집중합니다. 브랜드의 분위기와 제품의 목적이 자연스럽게 이어지는 화면을
            설계합니다.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="primary-link">
              프로젝트 보기
            </a>
            <a href="#contact" className="secondary-link">
              연락하기
            </a>
          </div>
        </div>
        <div className="hero-card">
          <p className="card-label">Available for</p>
          <ul>
            <li>Frontend Development</li>
            <li>Landing Page Design</li>
            <li>Product UI Implementation</li>
          </ul>
          <div className="hero-metrics">
            <div>
              <strong>3+</strong>
              <span>대표 프로젝트</span>
            </div>
            <div>
              <strong>4</strong>
              <span>핵심 강점</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-grid" id="about">
        <div>
          <p className="section-tag">About</p>
          <h2>기획 의도를 구현 디테일로 바꾸는 사람입니다.</h2>
        </div>
        <div className="section-body">
          <p>
            단순히 화면을 만드는 데서 끝나지 않고, 사용자가 어떤 흐름으로 이해하고
            행동할지까지 함께 설계합니다. 구조는 명확하게, 비주얼은 인상적으로,
            코드는 확장 가능하게 만드는 것을 중요하게 생각합니다.
          </p>
        </div>
      </section>

      <section className="skills-panel">
        <div>
          <p className="section-tag">Strengths</p>
          <h2>핵심 역량</h2>
        </div>
        <div className="strength-list">
          {strengths.map((strength, index) => (
            <article key={strength} className="strength-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{strength}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <p className="section-tag">Projects</p>
          <h2>선택한 작업들</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-meta">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
              <div className="stack-list">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section">
        <div className="section-heading">
          <p className="section-tag">Experience</p>
          <h2>일하는 방식</h2>
        </div>
        <div className="timeline">
          {experiences.map((experience) => (
            <article key={experience.period} className="timeline-item">
              <span>{experience.period}</span>
              <div>
                <h3>{experience.title}</h3>
                <p>{experience.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-tag">Contact</p>
        <h2>함께 만들고 싶은 프로젝트가 있다면 이야기해 주세요.</h2>
        <p>
          이메일, GitHub, LinkedIn 등 원하는 채널로 연결할 수 있도록 아래 정보를
          자유롭게 교체해서 사용하면 됩니다.
        </p>
        <div className="contact-links">
          <a href="mailto:hello@example.com">hello@example.com</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            github.com/yourname
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            linkedin.com/in/yourname
          </a>
        </div>
      </section>
    </main>
  );
}
