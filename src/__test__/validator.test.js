import Validator from "../validator";

// eslint-disable-next-line no-undef
test.each([
    ['правильное имя', { userName: "Dea-1_next", expects: true }],
    ['начало не с буквы', { name: "9ea-1_next", expects: false }],
    //['в конце не буква', { name: "Dea-1_nex0", expects: false }],
    //['в конце не буква', { name: "Dea-1_nex0", expects: false }],
    //['больше, чем 3 цифры подряд', { name: "Dea-1097", expects: false }],
    ['не латинские буквы', { name: "Дэа-1_next", expects: false }]
  ])("валидация имени пользователя", (_, data) => {
    const validName = new Validator(data.userName);
    // eslint-disable-next-line no-undef
    expect(validName.validateUsername()).toBe(data.expects);
  });
