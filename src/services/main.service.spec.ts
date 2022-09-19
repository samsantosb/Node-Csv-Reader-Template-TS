import { fakePerson } from "../__mocks__/fake.persons";
import { fakeMongoRepository } from "../__mocks__/fake.mongo.repository";
import { MainService } from "./main.service";

const mainService = new MainService(fakeMongoRepository);

describe("MainService", () => {
  describe("getAll", () => {
    it("should return all persons", async () => {
      const result = await mainService.getAll("csv");
      expect(result).toEqual(fakePerson);
    });
    describe("getOne", () => {
      it("should return a person", async () => {
        const result = await mainService.getOne("csv", "1");
        expect(result).toEqual(fakePerson[0]);
      });
    });
    describe("create", () => {
      it("should return a person", async () => {
        const result = await mainService.create("csv", fakePerson[0]);
        expect(result).toEqual(fakePerson[0]);
      });
    });
    describe("update", () => {
      it("should return a person", async () => {
        const result = await mainService.update("csv", "1", fakePerson[0]);
        expect(result).toEqual(fakePerson[0]);
      });
    });
    describe("delete", () => {
      it("should return a person", async () => {
        const result = await mainService.delete("csv", "1");
        expect(result).toEqual(fakePerson[0]);
      });
    });
  });
});
