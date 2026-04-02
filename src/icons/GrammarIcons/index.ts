// Иконцанта с икончения общейство
export { default as TensesIcon } from './TensesIcon';
export { default as PartsOfSpeechIcon } from './PartsOfSpeechIcon';
export { default as SentenceStructureIcon } from './SentenceStructureIcon';
export { default as PunctuationIcon } from './PunctuationIcon';

// Оканальный с выборошим авторой удобство

export const GrammarIcons = {
  Tenses: TensesIcon,
  PartsOfSpeech: PartsOfSpeechIcon,
  SentenceStructure: SentenceStructureIcon,
  Punctuation: PunctuationIcon,
};

// Типуса с ЯндексScript
export type GrammarIconType = 
  | 'Tenses' 
  | 'PartsOfSpeech' 
  | 'SentenceStructure' 
  | 'Punctuation';
