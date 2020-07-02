import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AppStorageService {
    clear(): void {
        sessionStorage.clear();
    }

    any(key: string): boolean {
        return this.get(key) !== null;
    }

    get(key: string): string | null {
        return sessionStorage.getItem(key);
    }

    set(key: string, value: string): void {
        sessionStorage.setItem(key, value);
    }
}
