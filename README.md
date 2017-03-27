# ng2-brvalidators
Angular2 Validators (ReactiveFormsModule)

## How to install
Angular2 Validators (ReactiveFormsModule)

``` npm install ng2-brvalidators --save ```

Then include the ng2-brvalidators in your project.

Using SystemJS, you can add a mapping to your System.config:

```
System.config({
      map: {
        ...,
        'ng2-brvalidators': 'npm:ng2-brvalidators'
      },
      packages: {
        ....,
        "ng2-brvalidators": { "defaultExtension": "js" }
    }
  });
  ```
  
## Available validators

### Email Validator (emailValidator)
// RFC 2822 compliant regex

```
 this.form  = this.fb.group({
  'email': [this.email, [ValidationService.emailValidator]],
});

```

## Custom Validate

You can create custom validations within your component and add them to your form by passing a message

```
 maiorQueZero(control) {
        if (parseInt(control.value) > 0)
            return null
        return { 'customErro': { 'message': 'O valor tem que ser maior que zero.' } };
    }

```

```
this.form = this.fb.group({
  'Vr': [this.value, [Validators.required, this.maiorQueZero]]
});
```
