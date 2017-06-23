# [Home](http://appbase.com/ "API Base")

# [Users](http://appbase.com/credentials "Credentials")
````javascript

````

# [Users](http://appbase.com/users "users")
```javascript
{
  _id:'3452sdfgwq435',
  name:'Kevin Gamero',
  email:'kevin@loquesea.com',
  roles: ['admin','client','god','organizer','public','usher'],
  organizationId: '32r2rfw4rqw3df',
  status: 'pending'|'active'|'disabled'
}
```
# [Organizations](http://appbase.com/organizations "Organizations")
```javascript
{
  _id:'3452sdfgwq435',
  name:'One organization',
  email:'info@one.org',
  phone : '987654321',
  url : 'http://one.org',
  address:{},
  description: '',
  image:'',
  standardPrice: 159,
  reducedPrice:15,
}
```
# [Events](http://appbase.com/events "Events")
```javascript
{
  _id:'3452sdfgwq435',
  organizerId :'213451234fasdf',
  created: '',
  name:'',
  description: '',
  image:'',
  startDate:'',
  endDate:'',
  location:'',
  price: 158.24,
  capacity:100,
  shift:1,
  items:[''],
}
```
# [Bookings](http://appbase.com/bookings "Bookings")
```javascript
{
  _id:'3452sdfgwq435',
  eventId: 'sdfq234524rae',
  clientId: 'sdfa1245213',
  status : 'pending'|'active'|'done'|'canceled'|'denied',
  total: 1,
  amount: 158.24,
  observations: '',
  hash: 'dfgas1dfgasdfg2sdfgsd4fgsdfgsdfg'
}
```
# [Payments](http://appbase.com/payments "Payments")
```javascript
{
  _id:'3452sdfgwq435',
  bookingId: 'sdfq234524rae',
  status : 'pending'|'paid'|'canceled',
  amount: 58.24,
  method: 'card'|'cash'|'coupon'|'transfer',
  observations: '',
}
```
