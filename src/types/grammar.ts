// TypeScript interfaces for grammar content
// Generated: 04.04.2026 10:10 UTC

export interface GrammarLesson {
  id: string;
  title: string;
  slug: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  category: string;
  icon: string;
  isFeatured?: boolean;
  isNew?: boolean;
  progress?: number;
  introduction?: string;
  sections?: LessonSection[];
  usageRules?: string[];
  positiveExamples?: string[];
  negativeExamples?: string[];
  questionExamples?: string[];
  exercises?: LessonExercise[];
  faq?: FAQItem[];
}

export interface LessonSection {
  id: string;
  title: string;
  content: string;
  examples: string[];
  tips: string[];
}

export interface LessonExercise {
  id: string;
  type: 'multiple_choice' | 'fill_in' | 'matching';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GrammarCategory {
  id: string;
  name: string;
  description: string;
  lessonCount: number;
  icon: string;
  color: string;
}

export interface GrammarLessonsData {
  page: {
    title: string;
    description: string;
    totalLessons: number;
    categories: GrammarCategory[];
    lessons: Array<>;
    seo: {
      title: string;
      description: string;
      keywords: string[];
      canonicalUrl: string;
    };
  };
}

export interface LevelTestQuestion {
  id: string;
  type: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: string;
}

export interface LevelTestData {
  test: {
    title: string;
    description: string;
    duration: string;
    totalQuestions: number;
    levels: string[];
    instructions: string;
    questions: LevelTestQuestion[];
    scoring: {
      beginner: string;
      intermediate: string;
      advanced: string;
    };
    results: {
      beginner: {
        title: string;
        description: string;
        recommendations: string[];
      };
      intermediate: {
        title: string;
        description: string;
        recommendations: string[];
      };
      advanced: {
        title: string;
        description: string;
        recommendations: string[];
      };
    };
    seo: {
      title: string;
      description: string;
      keywords: string[];
    };
  };
}

export interface TravelVocabularyData {
  vocabulary: {
    title: string;
    description: string;
    category: string;
    difficulty: string;
    duration: string;
    sections: Array<>;
  };
}

export interface PhrasalVerbData {
  phrasalVerbs: {
    title: string;
    description: string;
    category: string;
    difficulty: string;
    duration: string;
    verbs: Array<>;
    categories: Array<>;
    examples: Array<>;
    exercises: Array<>;
  };
}

// Helper types for content loading
export type ContentType =
  | 'present-simple-lesson'
  | 'grammar-lessons'
  | 'level-test'
  | 'travel-vocabulary'
  | 'phrasal-verbs';

export interface ContentMetadata {
  type: string;
  filename: string;
  author: string;
  version: string;
  created_at: string;
  status: string;
}

export interface ContentFile {
  metadata: ContentMetadata;
  lesson?: GrammarLesson;
  page?: any;
  test?: any;
  vocabulary?: any;
  phrasalVerbs?: any;
}