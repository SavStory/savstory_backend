import { model } from 'mongoose'
import { salvationSttorySchema, ISalvationStory } from './salvation_story'

export const SalvationStory = model<ISalvationStory>(
  'salvation_story',
  salvationSttorySchema
)
