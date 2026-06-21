export type Lang = 'en' | 'jp';

export interface Project {
  label: string;
  url?: string;
}

export interface WorkExperience {
  company: string;
  period: string;
  position: string;
  responsibilities: string[];
  technologies: string;
  teamSize: string;
  projects: Project[];
}

export interface Education {
  institution: string;
  note: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface CVData {
  meta: { title: string; description: string };
  ui: {
    summary: string;
    careerGoal: string;
    skills: string;
    experience: string;
    education: string;
    personalSkills: string;
    hobbies: string;
    contact: string;
    downloadCV: string;
    teamSize: string;
    technologies: string;
    strengths: string;
    weaknesses: string;
    languages: string;
    dob: string;
    gender: string;
    address: string;
    phone: string;
    email: string;
  };
  hero: { name: string; title: string; tagline: string };
  personal: { phone: string; email: string; address: string; linkedin: string; dob: string; gender: string };
  summary: string;
  careerGoal: string;
  skillGroups: SkillGroup[];
  experience: WorkExperience[];
  education: Education[];
  personalSkills: { languages: string; strengths: string; weaknesses: string };
  hobbies: string[];
}

const enData: CVData = {
  meta: {
    title: 'Tran Vu Hao — Frontend Developer',
    description:
      'Frontend Developer with 7 years of experience in ReactJS, NextJS, and Angular. Based in Ho Chi Minh City, Vietnam.',
  },
  ui: {
    summary: 'Summary',
    careerGoal: 'Career Goal',
    skills: 'Skills & Technologies',
    experience: 'Professional Experience',
    education: 'Education',
    personalSkills: 'Personal Skills',
    hobbies: 'Hobbies',
    contact: 'Contact',
    downloadCV: 'Download CV',
    teamSize: 'Team size',
    technologies: 'Technologies',
    strengths: 'Strengths',
    weaknesses: 'Weaknesses',
    languages: 'Languages',
    dob: 'Date of Birth',
    gender: 'Gender',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
  },
  hero: {
    name: 'Tran Vu Hao',
    title: 'Frontend Developer',
    tagline: '7 years of experience · ReactJS · NextJS · Angular · Aspiring BrSE',
  },
  personal: {
    phone: '0902-757-811',
    email: 'tranvuhao3010@gmail.com',
    address: 'Binh Tan Ward, Ho Chi Minh City',
    linkedin: 'https://www.linkedin.com/in/hao-tran-a28546117/',
    dob: '30-10-1990',
    gender: 'Male',
  },
  summary:
    'Frontend Developer with 7 years of experience, 5 years of hands-on experience with ReactJS, 1 year with NextJS and 1 year with Angular. Strong background in building scalable, responsive, and user-friendly web applications. Experienced in performance optimization, unit testing, and Agile/Waterfall environments.',
  careerGoal:
    'I am seeking a Frontend Developer position where I can apply my strong experience in ReactJS/NextJS, while improving my backend and system knowledge with Java. My long-term goal is to become a professional Bridge System Engineer (BrSE), connecting Japanese clients and development teams effectively.',
  skillGroups: [
    {
      label: 'Frontend',
      items: ['ReactJS', 'NextJS', 'Angular', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'TailwindCSS', 'SCSS', 'jQuery'],
    },
    { label: 'State Management', items: ['Recoil', 'React Query', 'NgRx'] },
    { label: 'Testing', items: ['Jest', 'Jasmine'] },
    { label: 'Tools', items: ['Git', 'Gulp', 'Storybook', 'Figma'] },
    {
      label: 'Backend (Self-studied)',
      items: ['NodeJS (Express/Nest)', 'PHP MVC', 'Java Core', 'Java Spring Boot 3', 'MySQL', 'PostgreSQL', 'MongoDB'],
    },
    { label: 'Cloud & Others', items: ['AWS', 'Azure', 'Guacamole API'] },
  ],
  experience: [
    {
      company: 'NEC Vietnam',
      period: 'July 2024 – July 2025  (1 year)',
      position: 'Frontend Developer',
      responsibilities: [
        'Developed new features, fixed bugs and optimized user interface using ReactJS and NextJS based on business requirements.',
        'Wrote unit tests using Jest to ensure code quality and maintainability.',
        'Held daily morning meetings with project managers and team members to report progress, share problems and resolve them together.',
      ],
      technologies: 'ReactJS, NextJS, Jest, AWS, Azure, Guacamole API',
      teamSize: '20 members',
      projects: [{ label: 'Confidential' }],
    },
    {
      company: 'ICD Vietnam',
      period: 'March 2021 – June 2024  (3 years 4 months)',
      position: 'UI Developer / Frontend Developer',
      responsibilities: [
        'Built UI templates using PUG, SCSS and managed assets via Gulp.',
        'Converted designs from Figma into responsive, cross-browser compatible HTML/CSS.',
        'Developed and maintained UI components using Storybook.',
        'Built Single Page Applications using ReactJS, React Hooks, Recoil, and React Query.',
        'Integrated APIs and handled data fetching efficiently using React Query.',
      ],
      technologies: 'ReactJS, React Hooks, Recoil, React Query, Storybook, MUI',
      teamSize: '14 members',
      projects: [
        { label: 'cainz.com', url: 'https://www.cainz.com/' },
        { label: 'oliverinc.co.jp/recruit', url: 'https://www.oliverinc.co.jp/recruit/' },
        { label: 'React project: Confidential' },
      ],
    },
    {
      company: 'FSoft Vietnam',
      period: 'January 2020 – December 2020  (1 year)',
      position: 'BrSE Training Program / Salesforce Developer',
      responsibilities: [
        'Attended BrSE (Bridge Software Engineer) training program with focus on Japanese communication skills.',
        'Developed features using APEX for the Salesforce platform during a 2-month project phase.',
      ],
      technologies: 'Salesforce APEX',
      teamSize: '10 members',
      projects: [{ label: 'Confidential' }],
    },
    {
      company: 'DXC Vietnam',
      period: 'July 2018 – December 2019  (1 year 6 months)',
      position: 'Frontend Developer (Angular)',
      responsibilities: [
        'Developed Angular components.',
        'Implemented state management using NgRx to handle complex data flows.',
        'Wrote unit tests with Jasmine, maintaining code coverage above 80%.',
      ],
      technologies: 'Angular 5, NgRx, Angular Material',
      teamSize: 'Over 50 members',
      projects: [{ label: 'Confidential' }],
    },
    {
      company: 'Evolable Asia',
      period: 'January 2017 – June 2018  (1 year 6 months)',
      position: 'UI Developer',
      responsibilities: [
        'Created and maintained web interfaces for Japanese healthcare websites.',
        'Ensured pixel-perfect implementation from PSD to HTML/CSS.',
        'Performed code reviews to maintain consistency and quality across the team.',
      ],
      technologies: 'HTML, CSS, jQuery',
      teamSize: '4 members',
      projects: [{ label: 'hosp.juntendo.ac.jp', url: 'https://hosp.juntendo.ac.jp/outpatients/major/' }],
    },
    {
      company: 'Oro Vietnam',
      period: '2013 – December 2016  (3 years 3 months)',
      position: 'UI Developer',
      responsibilities: [
        'Converted PSD designs to responsive HTML/CSS for Japanese e-commerce websites.',
        'Implemented interactive UI features using jQuery.',
        'Ensured compatibility across browsers (IE, Firefox, Chrome).',
      ],
      technologies: 'HTML, CSS, jQuery, Photoshop',
      teamSize: '10 members',
      projects: [{ label: 'aeon.com.vn', url: 'https://www.aeon.com.vn/' }],
    },
  ],
  education: [
    { institution: 'Huflit University', note: 'Bachelor of Software Technology' },
    { institution: 'Viet Chuyen Center', note: 'PHP Course' },
    { institution: 'Du học Nhật Bản YOKO', note: 'Japanese N3' },
    { institution: 'Mankai Academy', note: 'Japanese N2' },
  ],
  personalSkills: {
    languages: 'English B1, Japanese N2',
    strengths: 'I always Report, Contact, Discuss.',
    weaknesses:
      'I tend to strive for perfection, which sometimes slows down progress under pressure. I am actively improving this by applying better task prioritization and time management techniques.',
  },
  hobbies: ['Football', 'Gym', 'Beer & Coffee', 'Anime', 'Cartoon'],
};

const jpData: CVData = {
  meta: {
    title: 'トラン・ヴー・ハオ — フロントエンドエンジニア',
    description:
      '7年間のフロントエンド開発経験を持つエンジニア。ReactJS・NextJS・Angularに精通。ホーチミン市在住。',
  },
  ui: {
    summary: 'サマリー',
    careerGoal: 'キャリア目標',
    skills: 'スキル・使用技術',
    experience: '職務経歴',
    education: '学歴',
    personalSkills: '個人スキル・語学',
    hobbies: '趣味',
    contact: '連絡先',
    downloadCV: 'CVダウンロード',
    teamSize: 'チーム規模',
    technologies: '技術',
    strengths: '長所',
    weaknesses: '短所',
    languages: '語学',
    dob: '生年月日',
    gender: '性別',
    address: '住所',
    phone: '携帯',
    email: 'メール',
  },
  hero: {
    name: 'トラン・ヴー・ハオ',
    title: 'フロントエンドエンジニア',
    tagline: '経験7年 · ReactJS · NextJS · Angular · BrSE志望',
  },
  personal: {
    phone: '+84 902-757-811',
    email: 'tranvuhao3010@gmail.com',
    address: 'ホーチミン市ビンタイン区',
    linkedin: 'https://www.linkedin.com/in/hao-tran-a28546117/',
    dob: '1990年10月30日',
    gender: '男性',
  },
  summary:
    '7年間のフロントエンド開発経験があり、ReactJSの実務経験5年、NextJSの経験1年、Angularの経験1年を持っています。拡張性が高く、レスポンシブでユーザーフレンドリーなWebアプリケーションの開発を得意としています。パフォーマンス最適化、単体テスト、ならびにアジャイル・ウォーターフォール環境での開発経験があります。',
  careerGoal:
    'ReactJS／NextJSの豊富な経験を活かせるフロントエンドエンジニアとして活躍しながら、Javaを中心としたバックエンドおよびシステム知識の向上を目指しています。将来的には、日本のお客様と開発チームをつなぐプロフェッショナルなブリッジシステムエンジニア（BrSE）になることを目標としています。',
  skillGroups: [
    {
      label: 'Frontend',
      items: ['ReactJS', 'NextJS', 'Angular', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'TailwindCSS', 'SCSS', 'jQuery'],
    },
    { label: 'State Management', items: ['Recoil', 'React Query', 'NgRx'] },
    { label: 'Testing', items: ['Jest', 'Jasmine'] },
    { label: 'ツール', items: ['Git', 'Gulp', 'Storybook', 'Figma'] },
    {
      label: 'Backend（独学）',
      items: ['NodeJS (Express/Nest)', 'PHP MVC', 'Java Core', 'Java Spring Boot 3', 'MySQL', 'PostgreSQL', 'MongoDB'],
    },
    { label: 'Cloud & その他', items: ['AWS', 'Azure', 'Guacamole API'] },
  ],
  experience: [
    {
      company: 'NEC Vietnam',
      period: '2024年7月 〜 2025年7月（1年）',
      position: 'Frontend Developer',
      responsibilities: [
        'ビジネス要件に基づき、ReactJS / NextJS を用いた新機能開発、バグ対応、UIの最適化を実施。',
        'Jest によるユニットテスト作成でコード品質・保守性を確保。',
        '毎朝の進捗共有ミーティングで PM やチームメンバーと課題共有・解決を行った。',
      ],
      technologies: 'ReactJS, NextJS, Jest, AWS, Azure, Guacamole API',
      teamSize: '20名',
      projects: [{ label: '機密' }],
    },
    {
      company: 'ICD Vietnam',
      period: '2021年3月 〜 2024年6月（3年4ヶ月）',
      position: 'UI Developer / Frontend Developer',
      responsibilities: [
        'PUG、SCSS を用いた UI テンプレート作成、資産の GULP 管理。',
        'Figma のデザインをレスポンシブでクロスブラウザ対応の HTML/CSS に落とし込み。',
        'Storybook による UI コンポーネントの開発・保守。',
        'ReactJS（Hooks）、Recoil、React Query による SPA 開発。',
        'React Query を用いた API 統合と効率的なデータ取得。',
      ],
      technologies: 'ReactJS, React Hooks, Recoil, React Query, Storybook, MUI',
      teamSize: '14名',
      projects: [
        { label: 'cainz.com', url: 'https://www.cainz.com/' },
        { label: 'oliverinc.co.jp/recruit', url: 'https://www.oliverinc.co.jp/recruit/' },
        { label: 'React プロジェクト：機密' },
      ],
    },
    {
      company: 'FSoft Vietnam',
      period: '2020年1月 〜 2020年12月（1年）',
      position: 'BrSEトレーニングプログラム / Salesforce開発',
      responsibilities: [
        'BrSE（日本語コミュニケーション重視）のトレーニングに参加。',
        'Salesforce プラットフォームで APEX を用いた機能開発（プロジェクト期間 2ヶ月）。',
      ],
      technologies: 'Salesforce APEX',
      teamSize: '10名',
      projects: [{ label: '機密' }],
    },
    {
      company: 'DXC Vietnam',
      period: '2018年7月 〜 2019年12月（1年6ヶ月）',
      position: 'Frontend Developer（Angular）',
      responsibilities: [
        'Angular コンポーネントの開発。',
        'NgRx を用いた状態管理の実装（複雑なデータフロー対応）。',
        'Jasmine によるユニットテスト作成、カバレッジ 80% 以上を維持。',
      ],
      technologies: 'Angular 5, NgRx, Angular Material',
      teamSize: '50名以上',
      projects: [{ label: '機密' }],
    },
    {
      company: 'Evolable Asia',
      period: '2017年1月 〜 2018年6月（1年6ヶ月）',
      position: 'UI Developer',
      responsibilities: [
        '日本向け医療系サイトの UI 作成・保守。',
        'PSD からのピクセルパーフェクト実装（HTML/CSS）。',
        'コードレビューで品質維持に貢献。',
      ],
      technologies: 'HTML, CSS, jQuery',
      teamSize: '4名',
      projects: [{ label: 'hosp.juntendo.ac.jp', url: 'https://hosp.juntendo.ac.jp/outpatients/major/' }],
    },
    {
      company: 'Oro Vietnam',
      period: '2013年 〜 2016年12月（3年3ヶ月）',
      position: 'UI Developer',
      responsibilities: [
        'PSD デザインからのレスポンシブ HTML/CSS 実装（日本向け EC サイト）。',
        'jQuery によるインタラクティブ機能の実装。',
        '各ブラウザ（IE、Firefox、Chrome）対応の保証。',
      ],
      technologies: 'HTML, CSS, jQuery, Photoshop',
      teamSize: '10名',
      projects: [{ label: 'aeon.com.vn', url: 'https://www.aeon.com.vn/' }],
    },
  ],
  education: [
    { institution: 'Huflit University', note: 'Bachelor of Software Technology' },
    { institution: 'Viet Chuyen Center', note: 'PHP コース' },
    { institution: 'Du học Nhật Bản YOKO', note: '日本語 N3' },
    { institution: 'Mankai Academy', note: '日本語 N2' },
  ],
  personalSkills: {
    languages: '英語 B1、日本語 N2（技術ドキュメントの読解・基礎的なコミュニケーション可能）',
    strengths: '常に「報告・連絡・相談（ホウレンソウ）」を実践します。',
    weaknesses:
      '完璧を目指すあまり、プレッシャー下で作業が遅れることがある → 現在は優先順位付けと時間管理で改善中。',
  },
  hobbies: ['サッカー', 'ジム', 'ビール＆コーヒー', 'アニメ', 'マンガ'],
};

export const cvData: Record<Lang, CVData> = {
  en: enData,
  jp: jpData,
};
