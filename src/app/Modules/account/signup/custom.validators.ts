import { AbstractControl } from '@angular/forms';
export class CustomValidators
{
    static  validateEmail(control : AbstractControl) : { [key: string] : any } | null
    {
    const email : string = control.value;
    const domain = email != null ? email.substring(email.lastIndexOf('@') + 1): ''; // Need to explore
    if (email === '' || domain.toLowerCase() === 'scoriait.com') {
    return null; // returning null
    } else
    {
    return { 'validateEmail': true }; // returning { [key: string] : any }
    }
    }

}