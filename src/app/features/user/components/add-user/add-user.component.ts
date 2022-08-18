import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Trainer } from '../list-user/list-user.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit, AfterViewInit {
  @ViewChild('fileInput') fileInput: any;
  @ViewChild('addEmployeeButton') addEmployeeButton: any;
  title = 'EmployeeCRUD';

  trainerForm!: FormGroup;

  trainer!: Trainer[];
  trainerToDisplay!: Trainer[];
  educationOptions = [
    '10th pass',
    'diploma',
    'graduate',
    'post graduate',
    'PhD',
  ];

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.trainerForm = fb.group({});
    this.trainer = [];
    this.trainerToDisplay = this.trainer;
  }

  ngOnInit(): void {
    this.trainerForm = this.fb.group({
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      birthday: this.fb.control(''),
      gender: this.fb.control(''),
      education: this.fb.control('default'),
      company: this.fb.control(''),
      jobExperience: this.fb.control(''),
      salary: this.fb.control(''),
    });
    this.userService.getUser().subscribe((res) => {
      for (let emp of res) {
        this.trainer.unshift(emp);
      }
      this.trainerToDisplay = this.trainer;
    });
  }

  ngAfterViewInit(): void {
    //this.buttontemp.nativeElement.click();
  }

  addEmployee() {
    let trainer: Trainer = {
      firstname: this.FirstName.value,
      lastname: this.LastName.value,
      birthdate: this.BirthDay.value,
      gender: this.Gender.value,
      education: this.educationOptions[parseInt(this.Education.value)],
      company: this.Company.value,
      jobExperience: this.JobExperience.value,
      salary: this.Salary.value,
      profile: this.fileInput.nativeElement.files[0]?.name,
    };
    // this.userService.postUser(trainer).subscribe((res) => {
    //   this.trainer.unshift(res);
    //   this.clearForm();
    // });
  }

  removeUser(event: any) {
    this.trainer.forEach((val, index) => {
      if (val.id === parseInt(event)) {
        this.userService.deleteUser(event).subscribe((res) => {
          this.trainer.splice(index, 1);
        });
      }
    });
  }

  editUser(event: any) {
    this.trainer.forEach((val, ind) => {
      if (val.id === event) {
        this.setForm(val);
      }
    });
    this.removeUser(event);
    this.addEmployeeButton.nativeElement.click();
  }

  setForm(emp: Trainer) {
    this.FirstName.setValue(emp.firstname);
    this.LastName.setValue(emp.lastname);
    this.BirthDay.setValue(emp.birthdate);
    this.Gender.setValue(emp.gender);

    let educationIndex = 0;
    this.educationOptions.forEach((val, index) => {
      if (val === emp.education) educationIndex = index;
    });
    this.Education.setValue(educationIndex);

    this.Company.setValue(emp.company);
    this.JobExperience.setValue(emp.jobExperience);
    this.Salary.setValue(emp.salary);
    this.fileInput.nativeElement.value = '';
  }

  searchUser(event: any) {
    let filteredUser: Trainer[] = [];

    if (event === '') {
      this.trainerToDisplay = this.trainer;
    } else {
      filteredUser = this.trainer.filter((val, index) => {
        let targetKey =
          val.firstname.toLowerCase() + '' + val.lastname.toLowerCase();
        let searchKey = event.toLowerCase();
        return targetKey.includes(searchKey);
      });
      this.trainerToDisplay = filteredUser;
    }
  }

  clearForm() {
    this.FirstName.setValue('');
    this.LastName.setValue('');
    this.BirthDay.setValue('');
    this.Gender.setValue('');
    this.Education.setValue('');
    this.Company.setValue('');
    this.JobExperience.setValue('');
    this.Salary.setValue('');
    this.fileInput.nativeElement.value = '';
  }

  public get FirstName(): FormControl {
    return this.trainerForm.get('firstname') as FormControl;
  }
  public get LastName(): FormControl {
    return this.trainerForm.get('lastname') as FormControl;
  }
  public get BirthDay(): FormControl {
    return this.trainerForm.get('birthday') as FormControl;
  }
  public get Gender(): FormControl {
    return this.trainerForm.get('gender') as FormControl;
  }
  public get Education(): FormControl {
    return this.trainerForm.get('education') as FormControl;
  }
  public get Company(): FormControl {
    return this.trainerForm.get('company') as FormControl;
  }
  public get JobExperience(): FormControl {
    return this.trainerForm.get('jobExperience') as FormControl;
  }
  public get Salary(): FormControl {
    return this.trainerForm.get('salary') as FormControl;
  }
}
