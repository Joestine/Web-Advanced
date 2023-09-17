export default class Buyer extends User {
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
        password
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
    }
}