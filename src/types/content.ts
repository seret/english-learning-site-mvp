// TypeScript interfaces for JSON content data
// Generated based on JSON structures from EnglishContentWriter

// Common metadata interface
export interface Metadata {
  type: string;
  filename: string;
  author: string;
  version: string;
  created_at: string;
  status: string;
}

// Grammar Lesson (page list)
export interface GrammarLessonCategory {
  id: string;
  name: string;
  description: string;
  lessonCount: number;
  icon: string;
  color: string;
}

export interface GrammarLessonItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  category: string;
  icon: string;
  progress: number;
  isNew: boolean;
  isFeatured: boolean;
}

export interface GrammarLessonsPageData {
  metadata: Metadata;
  page: {
    title: string;
    description: string;
    totalLessons: number;
    categories: GrammarLessonCategory[];
    lessons: GrammarLessonItem[];
    seo: {
      title: string;
      description: string;
      Keywords: string[];
      canonicalUrl: string;
    };
  };
}

// Present Simple Lesson
export interface PresentSimpleLessonSection {
  id: string;
  title: string;
  content: string;
  examples: string[];
  tips: string[];
}
export interface PresentSimpleLessonExercise {
  id: string;
  type: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export interface PresentSimpleLessonFAQ {
  question: string;
  answer: string;
}

export interface PresentSimpleLessonData {
  metadata: Metadata;
  lesson: {
    id: string;
    title: string;
    slug: string;
    description: string;
    difficulty: string;
    duration: string;
    category: string;
    icon: string;
    isFeatured: boolean;
    isNew: boolean;
    progress: number;
    introduction: string;
    sections: PresentSimpleLessonSection[];
    usageRules: string[];
    positiveExamples: string[];
    negativeExamples: string[];
    questionExamples: string[];
    exercises: PresentSimpleLessonExercise[];
    faq: PresentSimpleLessonFAQ[];
  };
}

// Level Test
export interface LevelTestQuestion {
  id: string;
  type: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: string;
}

export interface LevelTestResult {
  title: string;
  description: string;
  recommendations: string[];
}

export interface LevelTestData {
  metadata: Metadata;
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
      beginner: LevelTestResult;
      intermediate: LevelTestResult;
      advanced: LevelTestResult;
    };
    seo: {
      title: string;
      description: string;
      keywords: string[];
    };
  };
}

// Travel Vocabulary
export interface TravelWord {
  english: string;
  russian: string;
  transcription: string;
  example: string;
}

export interface TravelVocabularySection {
  id: string;
  title: string;
  words: TravelWord[];
}

export interface TravelVocabularyPhrase {
  english: string;
  russian: string;
  situation: string;
}

export interface TravelVocabularyData {
  metadata: Metadata;
  vocabulary: {
    title: string;
    description: string;
    category: string;
    difficulty: string;
    duration: string;
    sections: TravelVocabularySection[];
    phrases: TravelVocabularyPhrase[];
  };
}

// Phrasal Verbs
export interface PhrasalVerb {
  id: string;
  verb: string;
  meaning: string;
  transcription: string;
  example: string;
  synonyms: string[];
  notes: string;
}

export interface PhrasalVerbsCategory {
  name: string;
  verbs: string[];
}

export interface PhrasalVerbsExampleContext {
  context: string;
  sentences: string[];
}

export interface PhrasalVerbsExercisePair {
  verb: string;
  meaning: string;
}

export interface PhrasalVerbsExercise {
  id: string;
  type: string;
  instruction: string;
  pairs: PhrasalVerbsExercisePair[];
}

export interface PhrasalVerbsData {
  metadata: Metadata;
  phrasalVerbs: {
    title: string;
    description: string;
    category: string;
    difficulty: string;
    duration: string;
    verbs: PhrasalVerb[];
    categories: PhrasalVerbsCategory[];
    examples: PhrasalVerbsExampleContext[];
    exercises: PhrasalVerbsExercise[];
  };
}

// Union type for all content data
export type ContentData =
  | GrammarLessonsPageData
  | PresentSimpleLessonData
  | LevelTestData
  | TravelVocabularyData
  | PhrasalVerbsData;

// Content type enum for easy discrimination
export enum ContentType {
  GRAMMAR_LESSONS = 'grammar-lessons',
  PRESENT_SIMPLE = 'present-simple',
  LEVEL_TEST = 'level-test',
  TRAVEL_VOCABULARY = 'travel-vocabulary',
  PHRASAL_VERBS = 'phrasal-verbs',
}

export function getContentType(data: ContentData): ContentType {
  const metadataType = data.metadata.type;
  
  if (metadataType.includes('grammar_lessons_list')) return ContentType.GRAMMAR_LESSONS;
  if (metadataType.includes('grammar_lesson')) return ContentType.PRESENT_SIMPLE;
  if (metadataType.includes('level_test')) return ContentType.LEVEL_TEST;
  if (metadataType.includes('vocabulary_lesson')) return ContentType.TRAVEL_VOCABULARY;
  if (metadataType.includes('phrasal_verbs_lesson')) return ContentType.PHRASAL_VERBS;
  
  throw new Error(`Unknown content type: ${metadataType}`);
}