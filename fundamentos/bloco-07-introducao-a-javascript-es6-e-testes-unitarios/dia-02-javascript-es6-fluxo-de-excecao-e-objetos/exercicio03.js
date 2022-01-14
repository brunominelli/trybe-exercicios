const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  // Exercício 01
  const setKey = (object, key, value) => object[key] = value;
  setKey(lesson2, 'turno', 'noite');

  // Exercício 02
  const listObjectKeys = (object) => Object.keys(object);
  console.log(listObjectKeys(lesson1));
  console.log(listObjectKeys(lesson2));
  console.log(listObjectKeys(lesson3));

  // Exercicio 03
  const objectLenght = (object) => Object.keys(object).length;
  console.log(objectLenght(lesson1));
  console.log(objectLenght(lesson2));
  console.log(objectLenght(lesson3));

  // Exercício 04
  const listObjectValues = (object) => Object.values(object);
  console.log(listObjectValues(lesson1));
  console.log(listObjectValues(lesson2));
  console.log(listObjectValues(lesson3));

  // Exercicio 05
  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  console.log(allLessons);