const QA= require('../models/question.models')

const getQAStore = async () => {
  try {
    const qaDocuments = await QA.find({});
    const qaStore = {};
    qaDocuments.forEach(doc => {
      qaStore[doc.question] = doc.answer;
    });
    return qaStore;
  } catch (error) {
    console.error('Error fetching QA store:', error.message);
    throw error;
  }
};

module.exports = getQAStore;
