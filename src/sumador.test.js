import calculdadora from "./sumador.js";


describe("Sumar", () => {
  const calcu = new calculdadora();
  it("deberia sumar dos numeros", () => {
    expect(calcu.sumar(3, 2)).toEqual(5);
  });
});
