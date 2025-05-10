import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Patient } from '../../portal/models/patient.model';

@Injectable()
export class PatientService {

  constructor() { }

  public  getAllPatientsList():Observable<Patient[]>{
    return of([{ id: 1, image: 'https://i.pravatar.cc/150?img=1', name: 'Feroz Ahmmed', age: 28, address: 'Rajshahi, Bangladesh', lastAppointment: new Date('2025-04-20') },
      { id: 2, image: 'https://i.pravatar.cc/150?img=2', name: 'Nusrat Jahan', age: 32, address: 'Dhaka, Bangladesh', lastAppointment: new Date('2025-04-18') },
      { id: 3, image: 'https://i.pravatar.cc/150?img=3', name: 'Rezaul Karim', age: 45, address: 'Chittagong, Bangladesh', lastAppointment: new Date('2025-04-15') },
      { id: 4, image: 'https://i.pravatar.cc/150?img=4', name: 'Tahmina Akter', age: 36, address: 'Sylhet, Bangladesh', lastAppointment: new Date('2025-04-21') },
      { id: 5, image: 'https://i.pravatar.cc/150?img=5', name: 'Arif Hossain', age: 29, address: 'Khulna, Bangladesh', lastAppointment: new Date('2025-04-19') },
      { id: 6, image: 'https://i.pravatar.cc/150?img=6', name: 'Fatema Begum', age: 52, address: 'Barisal, Bangladesh', lastAppointment: new Date('2025-04-17') },
      { id: 7, image: 'https://i.pravatar.cc/150?img=7', name: 'Mamun Rashid', age: 34, address: 'Rangpur, Bangladesh', lastAppointment: new Date('2025-04-20') },
      { id: 8, image: 'https://i.pravatar.cc/150?img=8', name: 'Shila Sultana', age: 40, address: 'Mymensingh, Bangladesh', lastAppointment: new Date('2025-04-13') },
      { id: 9, image: 'https://i.pravatar.cc/150?img=9', name: 'Rafiq Islam', age: 50, address: 'Comilla, Bangladesh', lastAppointment: new Date('2025-04-16') },
      { id: 10, image: 'https://i.pravatar.cc/150?img=10', name: 'Rumana Chowdhury', age: 27, address: 'Gazipur, Bangladesh', lastAppointment: new Date('2025-04-22') },
      { id: 11, image: 'https://i.pravatar.cc/150?img=11', name: 'Shuvo Arefin', age: 24, address: 'Narayanganj, Bangladesh', lastAppointment: new Date('2025-04-14') },
      { id: 12, image: 'https://i.pravatar.cc/150?img=12', name: 'Tanjila Haque', age: 31, address: 'Tangail, Bangladesh', lastAppointment: new Date('2025-04-18') },
      { id: 13, image: 'https://i.pravatar.cc/150?img=13', name: 'Kawsar Mahmud', age: 38, address: 'Jessore, Bangladesh', lastAppointment: new Date('2025-04-20') },
      { id: 14, image: 'https://i.pravatar.cc/150?img=14', name: 'Nargis Sultana', age: 44, address: 'Bogura, Bangladesh', lastAppointment: new Date('2025-04-19') },
      { id: 15, image: 'https://i.pravatar.cc/150?img=15', name: 'Mizanur Rahman', age: 30, address: 'Noakhali, Bangladesh', lastAppointment: new Date('2025-04-21') },
      { id: 16, image: 'https://i.pravatar.cc/150?img=16', name: 'Nasima Akter', age: 48, address: 'Kushtia, Bangladesh', lastAppointment: new Date('2025-04-12') },
      { id: 17, image: 'https://i.pravatar.cc/150?img=17', name: 'Jahangir Alam', age: 55, address: 'Pabna, Bangladesh', lastAppointment: new Date('2025-04-10') },
      { id: 18, image: 'https://i.pravatar.cc/150?img=18', name: 'Sharmin Nahar', age: 33, address: 'Dinajpur, Bangladesh', lastAppointment: new Date('2025-04-18') },
      { id: 19, image: 'https://i.pravatar.cc/150?img=19', name: 'Asif Imtiaz', age: 26, address: 'Feni, Bangladesh', lastAppointment: new Date('2025-04-17') },
      { id: 20, image: 'https://i.pravatar.cc/150?img=20', name: 'Rokeya Begum', age: 41, address: 'Jamalpur, Bangladesh', lastAppointment: new Date('2025-04-15') }
  ])
  }
}
