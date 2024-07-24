'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    
      // Seed Learning Modes
      await queryInterface.bulkInsert('LearningModes', [
        { id: 1, name: 'Tematik',  },
        { id: 2, name: 'Topik',  },
        { id: 3, name: 'Kurikulum Merdeka',  },
      ]);

      // Seed Classes
      await queryInterface.bulkInsert('Classes', [
        { id: 1, name: 'Class 1', },
      { id: 2, name: 'Class 2', },
      { id: 3, name: 'Class 3', },
      { id: 4, name: 'Class 4', },
      { id: 5, name: 'Class 5', },
      { id: 6, name: 'Class 6', },
      { id: 7, name: 'Class 7', },
      { id: 8, name: 'Class 8', },
      { id: 9, name: 'Class 9', },
      { id: 10, name: 'Class 10', },
      { id: 11, name: 'Class 11', },
      { id: 12, name: 'Class 12', },
      { id: 13, name: 'Class 10 SMK', },
      { id: 14, name: 'Class 11 SMK', },
      { id: 15, name: 'Class 12 SMK', },
      ]);

      // Seed Subjects
      await queryInterface.bulkInsert('Subjects', [
        { id: 1,name: 'Matematika', classId: 1, learningModeId: 1,  },
        { id: 2,name: 'IPA', classId: 1, learningModeId: 1,  },
        { id: 3,name: 'Bahasa Indonesia', classId: 1, learningModeId: 1,  },
        { id: 4,name: 'Bahasa Inggris', classId: 1, learningModeId: 1,  },
        { id: 5,name: 'Pendidikan Karakter', classId: 1, learningModeId: 1,  },
        { id: 6,name: 'Matematika', classId: 3, learningModeId: 2,  },
        { id: 7,name: 'IPA', classId: 3, learningModeId: 2,  },
        { id: 8,name: 'Bahasa Indonesia', classId: 3, learningModeId: 2,  },
      ]);

      // Seed Chapters
      await queryInterface.bulkInsert('Chapters', [
        { id: 1,name: 'Bab 1 - Pengenalan Matematika', subjectId: 1,  },
        { id: 2,name: 'Bab 2 - Aritmatika Dasar', subjectId: 1,  },
        { id: 3,name: 'Bab 1 - Biologi', subjectId: 2,  },
        { id: 4,name: 'Bab 2 - Fisika', subjectId: 2,  },
      ]);

      // Seed SubChapters
      await queryInterface.bulkInsert('SubChapters', [
        { id: 1,name: 'Sub-Bab 1.1 - Konsep Dasar', chapterId: 1, isFree: true,  },
        { id: 2,name: 'Sub-Bab 1.2 - Operasi Matematika', chapterId: 1, isFree: false,  },
        { id: 3,name: 'Sub-Bab 2.1 - Penjumlahan dan Pengurangan', chapterId: 2, isFree: true,  },
        { id: 4,name: 'Sub-Bab 2.2 - Perkalian dan Pembagian', chapterId: 2, isFree: false,  },
      ]);

      // Seed Materials
      await queryInterface.bulkInsert('Materials', [
        { id: 1,name: 'Video 1 - Pengenalan Matematika', type: 'Video', xp: 125, gold: 10, subChapterId: 1,  },
        { id: 2,name: 'Quiz 1 - Konsep Dasar', type: 'Single quiz', xp: 50, gold: 50, subChapterId: 1,  },
        { id: 3,name: 'Summary 1 - Aritmatika Dasar', type: 'Summary', xp: 0, gold: 0, subChapterId: 2,  },
        { id: 4,name: 'Video 2 - Operasi Matematika', type: 'Video', xp: 125, gold: 10, subChapterId: 2,  },
        { id: 5,name: 'Quiz 2 - Penjumlahan', type: 'Single quiz', xp: 50, gold: 50, subChapterId: 2,  },
      ]);

      // Seed Users
      await queryInterface.bulkInsert('Users', [
        { name: 'Test User', email: 'testuser@example.com', password: await bcrypt.hash('password123', 10),  },
        { name: 'Another User', email: 'anotheruser@example.com', password: await bcrypt.hash('password123', 10),  },
      ]);

    
  },

  async down(queryInterface, Sequelize)  {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Materials', null, {});
    await queryInterface.bulkDelete('SubChapters', null, {});
    await queryInterface.bulkDelete('Chapters', null, {});
    await queryInterface.bulkDelete('Subjects', null, {});
    await queryInterface.bulkDelete('LearningModes', null, {});
    await queryInterface.bulkDelete('Classes', null, {});
  }
};
