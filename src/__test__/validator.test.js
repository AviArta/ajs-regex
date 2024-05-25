import Validator from "../validator";

// eslint-disable-next-line no-undef
test.each([
    ['правильное имя', { userName: "Dea-1_next", expects: true }],
    ['начало не с буквы', { userName: "9ea-1_next", expects: false }],
    ['в конце не буква', { userName: "Dea-1_nex0", expects: false }],
    ['в конце не буква', { userName: "Dea-1_nex0", expects: false }],
    ['больше, чем 3 цифры подряд', { userName: "Dea-1097", expects: false }],
    ['не латинские буквы', { userName: "Дэа-1_next", expects: false }]
  ])("валидация имени пользователя", (_, data) => {
    const validName = new Validator(data.userName);
    // eslint-disable-next-line no-undef
    expect(validName.validateUsername()).toBe(data.expects);
  });
