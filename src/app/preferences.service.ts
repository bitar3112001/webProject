import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  private readonly STORAGE_KEY = 'userPreferences';
  private keepLogIn=false;
  constructor() {

   }

  getKeepLogIn(): boolean {
const preferences= this.getUserPreferences();
return preferences? preferences: false;
  }
  setKeepLogIn(KeepLogged: boolean): void{
    // const preferences= this.getUserPreferences();
    const preferences= KeepLogged
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(preferences));
  }


  private getUserPreferences(): any{
    const storedPreferences = localStorage.getItem(this.STORAGE_KEY);
    return storedPreferences? JSON.parse(storedPreferences):false;
  }
}
