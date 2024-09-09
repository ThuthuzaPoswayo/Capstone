import {users} from "./User"
import {service} from "./Service"
import {booking} from "./Bookings"
import { Review } from "./Reviews"
const users = new users();
const service = new service();
const booking = new booking();
const review = new Review();
export {users,service,booking,review}