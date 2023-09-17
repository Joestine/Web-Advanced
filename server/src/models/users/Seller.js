class Seller extends User {
    constructor(
        firstname,
        prefix,
        lastname,
        address,
        housenumber,
        city,
        province,
        postal,
        email,
        password,
        company,
        IBAN
    ) {
        super(
            firstname,
            prefix,
            lastname,
            address,
            housenumber,
            city,
            province,
            postal,
            email,
            password
        );
        this.company = company;
        this.IBAN = IBAN;
    }
}