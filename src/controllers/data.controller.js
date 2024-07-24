const { Class, LearningMode, Subject, Chapter, SubChapter, Material, User } = require('../models');

// CRUD Operations for User
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.update(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CRUD Operations for Class
exports.getClasses = async (req, res) => {
  try {
    const classes = await Class.findAll({
      include: [{ model: LearningMode, as: 'learningModes' }],
    });
    res.status(200).json(classes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getClassById = async (req, res) => {
  try {
    const classInstance = await Class.findByPk(req.params.id, {
      include: [{ model: LearningMode, as: 'learningModes' }],
    });
    if (!classInstance) {
      return res.status(404).json({ message: 'Class not found' });
    }
    res.status(200).json(classInstance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createClass = async (req, res) => {
  try {
    const classInstance = await Class.create(req.body);
    res.status(201).json(classInstance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateClass = async (req, res) => {
  try {
    const classInstance = await Class.findByPk(req.params.id);
    if (!classInstance) {
      return res.status(404).json({ message: 'Class not found' });
    }
    await classInstance.update(req.body);
    res.status(200).json(classInstance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteClass = async (req, res) => {
  try {
    const classInstance = await Class.findByPk(req.params.id);
    if (!classInstance) {
      return res.status(404).json({ message: 'Class not found' });
    }
    await classInstance.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CRUD Operations for LearningMode
exports.getLearningModes = async (req, res) => {
  try {
    const learningModes = await LearningMode.findAll();
    res.status(200).json(learningModes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getLearningModeById = async (req, res) => {
  try {
    const learningMode = await LearningMode.findByPk(req.params.id);
    if (!learningMode) {
      return res.status(404).json({ message: 'LearningMode not found' });
    }
    res.status(200).json(learningMode);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createLearningMode = async (req, res) => {
  try {
    const learningMode = await LearningMode.create(req.body);
    res.status(201).json(learningMode);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateLearningMode = async (req, res) => {
  try {
    const learningMode = await LearningMode.findByPk(req.params.id);
    if (!learningMode) {
      return res.status(404).json({ message: 'LearningMode not found' });
    }
    await learningMode.update(req.body);
    res.status(200).json(learningMode);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteLearningMode = async (req, res) => {
  try {
    const learningMode = await LearningMode.findByPk(req.params.id);
    if (!learningMode) {
      return res.status(404).json({ message: 'LearningMode not found' });
    }
    await learningMode.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CRUD Operations for Subject
exports.getSubjects = async (req, res) => {
  try {
    const { classId, learningModeId } = req.query;
    const subjects = await Subject.findAll({ where: { classId, learningModeId } });
    res.status(200).json(subjects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.params.id);
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    res.status(200).json(subject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSubject = async (req, res) => {
  try {
    const subject = await Subject.create(req.body);
    res.status(201).json(subject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSubject = async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.params.id);
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    await subject.update(req.body);
    res.status(200).json(subject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSubject = async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.params.id);
    if (!subject) {
      return res.status(404).json({ message: 'Subject not found' });
    }
    await subject.destroy();
    res.status(204).send();
  } catch (err) {
    res.status (500).json({ error: err.message });
  }
};

// CRUD Operations for Chapter
exports.getChapters = async (req, res) => {
  try {
    const { subjectId } = req.query;
    const chapters = await Chapter.findAll({ where: { subjectId } });
    res.status(200).json(chapters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getChapterById = async (req, res) => {
  try {
    const chapter = await Chapter.findByPk(req.params.id);
    if (!chapter) {
      return res.status(404).json({ message: 'Chapter not found' });
    }
    res.status(200).json(chapter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createChapter = async (req, res) => {
  try {
    const chapter = await Chapter.create(req.body);
    res.status(201).json(chapter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateChapter = async (req, res) => {
  try {
    const chapter = await Chapter.findByPk(req.params.id);
    if (!chapter) {
      return res.status(404).json({ message: 'Chapter not found' });
    }
    await chapter.update(req.body);
    res.status(200).json(chapter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteChapter = async (req, res) => {
  try {
    const chapter = await Chapter.findByPk(req.params.id);
    if (!chapter) {
      return res.status(404).json({ message: 'Chapter not found' });
    }
    await chapter.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CRUD Operations for SubChapter
exports.getSubChapters = async (req, res) => {
  try {
    const { chapterId } = req.query;
    const subChapters = await SubChapter.findAll({ where: { chapterId } });
    res.status(200).json(subChapters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSubChapterById = async (req, res) => {
  try {
    const subChapter = await SubChapter.findByPk(req.params.id);
    if (!subChapter) {
      return res.status(404).json({ message: 'SubChapter not found' });
    }
    res.status(200).json(subChapter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSubChapter = async (req, res) => {
  try {
    const subChapter = await SubChapter.create(req.body);
    res.status(201).json(subChapter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSubChapter = async (req, res) => {
  try {
    const subChapter = await SubChapter.findByPk(req.params.id);
    if (!subChapter) {
      return res.status(404).json({ message: 'SubChapter not found' });
    }
    await subChapter.update(req.body);
    res.status(200).json(subChapter);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSubChapter = async (req, res) => {
  try {
    const subChapter = await SubChapter.findByPk(req.params.id);
    if (!subChapter) {
      return res.status(404).json({ message: 'SubChapter not found' });
    }
    await subChapter.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CRUD Operations for Material
exports.getMaterials = async (req, res) => {
  try {
    const { subChapterId } = req.query;
    const materials = await Material.findAll({ where: { subChapterId } });
    res.status(200).json(materials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMaterialById = async (req, res) => {
  try {
    const material = await Material.findByPk(req.params.id);
    if (!material) {
      return res.status(404).json({ message: 'Material not found' });
    }
    res.status(200).json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createMaterial = async (req, res) => {
  try {
    const material = await Material.create(req.body);
    res.status(201).json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMaterial = async (req, res) => {
  try {
    const material = await Material.findByPk(req.params.id);
    if (!material) {
      return res.status(404).json({ message: 'Material not found' });
    }
    await material.update(req.body);
    res.status(200).json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMaterial = async (req, res) => {
  try {
    const material = await Material.findByPk(req.params.id);
    if (!material) {
      return res.status(404).json({ message: 'Material not found' });
    }
    await material.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
