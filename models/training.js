const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TrainSchema = new Schema({
  age: Number,
  sex_0: Number,
  sex_1: Number,
  on_thyroxine_0: Number,
  on_thyroxine_1: Number,
  query_thyroxine_0: Number,
  query_thyroxine_1: Number,
  on_antithyroid_meds_0: Number,
  on_antithyroid_meds_1: Number,
  sick_0: Number,
  sick_1: Number,
  pregnant_0: Number,
  pregnant_1: Number,
  thyroid_surgery_0: Number,
  thyroid_surgery_1: Number,
  T131_treat_0: Number,
  T131_treat_1: Number,
  query_hypothyroid_0: Number,
  query_hypothyroid_1: Number,
  query_hyperthyroid_0: Number,
  query_hyperthyroid_1: Number,
  lithium_0: Number,
  lithium_1: Number,
  goitre_0: Number,
  goitre_1: Number,
  tumor_0: Number,
  tumor_1: Number,
  hypoituitary_0: Number,
  hypoituitary_1: Number,
  psych_0: Number,
  psych_1: Number,
  TSH: Number,
  T3: Number,
  TT4: Number,
  T4U: Number,
  FTI: Number,
});

module.exports = Train = mongoose.model('train', TrainSchema);
