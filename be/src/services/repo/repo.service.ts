import { Injectable } from '@nestjs/common';
import * as fs from "fs";

@Injectable()
export class RepoService {

    private FILE_PATH = "C:\\Users\\Aaron\\Documents\\CodeProjects\\playground\\user-management\\repo.json";
    constructor(){}

    public getRepo<T>(): T[] {
        const repoString = fs.readFileSync(this.FILE_PATH).toString();
        return JSON.parse(repoString);
    }

    public writeToRepo<T>(data: T) {
        const repo = this.getRepo<T>();
        repo.push(data);
        this.overwriteRepo(repo);
    }

    public replaceItem<T extends { id: string }>(id: string, newItem: T) {
        const repo = this.getRepo<T>();
        const filteredRepo = repo.filter(i => i.id !== id);
        filteredRepo.push(newItem);
        this.overwriteRepo(filteredRepo);
    }

    public removeItem<T extends { id: string }>(id: string) {
        const repo = this.getRepo<T>();
        const filteredRepo = repo.filter(i => i.id !== id);
        this.overwriteRepo(filteredRepo);
    }

    private overwriteRepo<T>(data: T[]) {
        const repoString = JSON.stringify(data);
        fs.writeFileSync(this.FILE_PATH, repoString);
    }
}
