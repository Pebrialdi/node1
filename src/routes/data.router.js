const express = require('express');
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getClasses,
  getClassById,
  createClass,
  updateClass,
  deleteClass,
  getLearningModes,
  getLearningModeById,
  createLearningMode,
  updateLearningMode,
  deleteLearningMode,
  getSubjects,
  getSubjectById,
  createSubject,
  updateSubject,
  deleteSubject,
  getChapters,
  getChapterById,
  createChapter,
  updateChapter,
  deleteChapter,
  getSubChapters,
  getSubChapterById,
  createSubChapter,
  updateSubChapter,
  deleteSubChapter,
  getMaterials,
  getMaterialById,
  createMaterial,
  updateMaterial,
  deleteMaterial,
} = require('../controllers/data.controller');
const { verifyToken } = require('../middlewares/auth');
const router = express.Router();

// Routes for User
router.get('/users', verifyToken, getUsers);
router.get('/users/:id', verifyToken, getUserById);
router.post('/users', verifyToken, createUser);
router.put('/users/:id', verifyToken, updateUser);
router.delete('/users/:id', verifyToken, deleteUser);

// Routes for Class
router.get('/classes', verifyToken, getClasses);
router.get('/classes/:id', verifyToken, getClassById);
router.post('/classes', verifyToken, createClass);
router.put('/classes/:id', verifyToken, updateClass);
router.delete('/classes/:id', verifyToken, deleteClass);

// Routes for LearningMode
router.get('/learning-modes', verifyToken, getLearningModes);
router.get('/learning-modes/:id', verifyToken, getLearningModeById);
router.post('/learning-modes', verifyToken, createLearningMode);
router.put('/learning-modes/:id', verifyToken, updateLearningMode);
router.delete('/learning-modes/:id', verifyToken, deleteLearningMode);

// Routes for Subject
router.get('/subjects', verifyToken, getSubjects);
router.get('/subjects/:id', verifyToken, getSubjectById);
router.post('/subjects', verifyToken, createSubject);
router.put('/subjects/:id', verifyToken, updateSubject);
router.delete('/subjects/:id', verifyToken, deleteSubject);

// Routes for Chapter
router.get('/chapters', verifyToken, getChapters);
router.get('/chapters/:id', verifyToken, getChapterById);
router.post('/chapters', verifyToken, createChapter);
router.put('/chapters/:id', verifyToken, updateChapter);
router.delete('/chapters/:id', verifyToken, deleteChapter);

// Routes for SubChapter
router.get('/sub-chapters', verifyToken, getSubChapters);
router.get('/sub-chapters/:id', verifyToken, getSubChapterById);
router.post('/sub-chapters', verifyToken, createSubChapter);
router.put('/sub-chapters/:id', verifyToken, updateSubChapter);
router.delete('/sub-chapters/:id', verifyToken, deleteSubChapter);

// Routes for Material
router.get('/materials', verifyToken, getMaterials);
router.get('/materials/:id', verifyToken, getMaterialById);
router.post('/materials', verifyToken, createMaterial);
router.put('/materials/:id', verifyToken, updateMaterial);
router.delete('/materials/:id', verifyToken, deleteMaterial);

module.exports = router;
