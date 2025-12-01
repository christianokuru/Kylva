# SafeRoute - Complete Architecture Document

## Table of Contents
1. [System Overview](#system-overview)
2. [Technology Stack](#technology-stack)
3. [Frontend Architecture](#frontend-architecture)
4. [Backend Architecture](#backend-architecture)
5. [Database Schema](#database-schema)
6. [Real-time Communication](#real-time-communication)
7. [Authentication & Security](#authentication--security)
8. [Geolocation & Maps](#geolocation--maps)
9. [File Storage Strategy](#file-storage-strategy)
10. [Payment Integration](#payment-integration)
11. [Notification System](#notification-system)
12. [API Routes Structure](#api-routes-structure)
13. [Deployment Architecture](#deployment-architecture)

---

## System Overview

### Color Palette
- **Primary Red**: `#FF3838` - Emergency, panic buttons, critical alerts
- **Primary Blue**: `#002455` - Trust, security, verified responders
- **Supporting Colors**:
  - Success: `#10B981` (green)
  - Warning: `#F59E0B` (amber)
  - Gray Scale: Tailwind's default gray palette

### Core Architecture Pattern
```
Nuxt 4 Fullstack Application
├── Frontend (Vue 3 + shadcn-vue + Tailwind)
├── Backend (Nuxt Nitro Server)
├── Real-time (Socket.io)
├── Database (MongoDB + Mongoose)
└── External Services (Paystack, Stripe, Resend, Termii, Google Maps)
```

---

## Technology Stack

### Frontend
```json
{
  "framework": "Nuxt 4",
  "ui": "shadcn-vue",
  "styling": "Tailwind CSS 4",
  "state": "Pinia + Nuxt useState",
  "icons": "Heroicons (via Lucide Vue)",
  "maps": "Google Maps JavaScript API",
  "realtime": "Socket.io Client"
}
```

### Backend
```json
{
  "runtime": "Nuxt Nitro",
  "database": "MongoDB Atlas",
  "odm": "Mongoose",
  "auth": "JWT + HTTP-only cookies",
  "email": "Resend",
  "sms": "Termii (Nigeria)",
  "whatsapp": "Termii WhatsApp API",
  "payments": ["Paystack (local)", "Stripe (international)"],
  "realtime": "Socket.io Server",
  "validation": "Zod"
}
```

### DevOps
```json
{
  "hosting": "Vercel",
  "database": "MongoDB Atlas (single region, scalable)",
  "cdn": "Vercel Edge Network",
  "monitoring": "Vercel Analytics",
  "error_tracking": "Vercel Logs"
}
```

---

## Frontend Architecture

### Directory Structure
```
/
├── app/
│   ├── components/
│   │   ├── emergency/
│   │   │   ├── PanicButton.vue
│   │   │   ├── EmergencyAlertCard.vue
│   │   │   ├── EmergencyDetails.vue
│   │   │   └── AlertList.vue
│   │   ├── responder/
│   │   │   ├── ResponderCard.vue
│   │   │   ├── ResponderList.vue
│   │   │   ├── ResponderTracking.vue
│   │   │   └── AcceptAlertButton.vue
│   │   ├── map/
│   │   │   ├── LiveTrackingMap.vue
│   │   │   ├── RouteMap.vue
│   │   │   ├── SafetyHeatmap.vue
│   │   │   └── ResponderMarker.vue
│   │   ├── chat/
│   │   │   ├── ChatWindow.vue
│   │   │   ├── ChatMessage.vue
│   │   │   └── ChatInput.vue
│   │   ├── profile/
│   │   │   ├── MedicalInfo.vue
│   │   │   ├── EmergencyContacts.vue
│   │   │   ├── VehicleInfo.vue
│   │   │   └── ProfileAvatar.vue
│   │   ├── safety/
│   │   │   ├── DangerousAreaReport.vue
│   │   │   ├── RouteSafetyRating.vue
│   │   │   └── SafetyMap.vue
│   │   └── common/
│   │       ├── LoadingSpinner.vue
│   │       ├── ErrorMessage.vue
│   │       ├── SuccessToast.vue
│   │       └── ConfirmDialog.vue
│   ├── composables/
│   │   ├── useAuth.js
│   │   ├── useGeolocation.js
│   │   ├── useSocket.js
│   │   ├── useEmergency.js
│   │   ├── useNotifications.js
│   │   ├── useMap.js
│   │   └── useChat.js
│   ├── layouts/
│   │   ├── default.vue
│   │   ├── emergency.vue (simplified, panic mode)
│   │   └── auth.vue
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── guest.js
│   │   └── profile-complete.js
│   ├── pages/
│   │   ├── index.vue (Dashboard/Home)
│   │   ├── auth/
│   │   │   ├── login.vue
│   │   │   ├─ register.vue
│   │   │   ├── verify-otp.vue
│   │   │   └── forgot-password.vue
│   │   ├── emergency/
│   │   │   ├── active.vue (when user is in panic)
│   │   │   ├── respond.vue (responder view)
│   │   │   └── history.vue
│   │   ├── profile/
│   │   │   ├── index.vue
│   │   │   ├── medical.vue
│   │   │   ├── emergency-contacts.vue
│   │   │   └── vehicle.vue
│   │   ├── safety/
│   │   │   ├── routes.vue
│   │   │   ├── reports.vue
│   │   │   └── map.vue
│   │   ├── responder/
│   │   │   ├── dashboard.vue
│   │   │   └── verification.vue
│   │   └── donate.vue
│   ├── plugins/
│   │   ├── socket.client.js
│   │   └── google-maps.client.js
│   ├── stores/
│   │   ├── auth.js
│   │   ├── emergency.js
│   │   ├── location.js
│   │   ├── chat.js
│   │   └── notifications.js
│   └── utils/
│       ├── distance.js (calculate distances)
│       ├── formatting.js
│       └── validation.js
├── server/
│   └── [Backend Structure - see below]
└── public/
    ├── sw.js (Service Worker for offline)
    └── manifest.json (PWA manifest)
```

### Key Composables

#### `useAuth.js`
```javascript
// Handles authentication state and operations
export const useAuth = () => {
  const user = useState('user', () => null)
  const token = useState('token', () => null)
  
  const login = async (email, password) => {}
  const register = async (userData) => {}
  const verifyOTP = async (email, otp) => {}
  const logout = async () => {}
  const updateProfile = async (data) => {}
  
  return { user, token, login, register, verifyOTP, logout, updateProfile }
}
```

#### `useGeolocation.js`
```javascript
// Handles GPS tracking with high accuracy
export const useGeolocation = () => {
  const location = useState('location', () => null)
  const watching = useState('watching', () => false)
  const error = useState('geoError', () => null)
  
  const getCurrentLocation = () => {}
  const watchLocation = () => {} // Continuous tracking
  const stopWatching = () => {}
  const calculateDistance = (lat1, lon1, lat2, lon2) => {}
  
  return { location, watching, error, getCurrentLocation, watchLocation, stopWatching, calculateDistance }
}
```

#### `useSocket.js`
```javascript
// Manages Socket.io connection and events
export const useSocket = () => {
  const socket = useState('socket', () => null)
  const connected = useState('socketConnected', () => false)
  
  const connect = () => {}
  const disconnect = () => {}
  const emit = (event, data) => {}
  const on = (event, callback) => {}
  const off = (event) => {}
  
  return { socket, connected, connect, disconnect, emit, on, off }
}
```

#### `useEmergency.js`
```javascript
// Manages emergency state and operations
export const useEmergency = () => {
  const activeEmergency = useState('activeEmergency', () => null)
  const nearbyAlerts = useState('nearbyAlerts', () => [])
  const respondingTo = useState('respondingTo', () => [])
  
  const activatePanic = async (description) => {}
  const cancelPanic = async () => {}
  const acceptAlert = async (alertId) => {}
  const updateStatus = async (status) => {}
  const resolveEmergency = async (alertId) => {}
  
  return { activeEmergency, nearbyAlerts, respondingTo, activatePanic, cancelPanic, acceptAlert, updateStatus, resolveEmergency }
}
```

### Pinia Stores

#### `auth.js`
```javascript
export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    authenticated: false,
    loading: false
  }),
  actions: {
    async fetchUser() {},
    async login(email, password) {},
    async logout() {}
  }
})
```

#### `emergency.js`
```javascript
export const useEmergencyStore = defineStore('emergency', {
  state: () => ({
    inPanic: false,
    activeEmergency: null,
    nearbyAlerts: [],
    respondingAlerts: [],
    responders: []
  }),
  actions: {
    async triggerPanic(data) {},
    async cancelPanic() {},
    async acceptResponse(alertId) {},
    updateResponders(responders) {}
  }
})
```

#### `location.js`
```javascript
export const useLocationStore = defineStore('location', {
  state: () => ({
    currentLocation: null,
    tracking: false,
    locationHistory: []
  }),
  actions: {
    startTracking() {},
    stopTracking() {},
    updateLocation(coords) {}
  }
})
```

---

## Backend Architecture

### Directory Structure
```
server/
├── api/
│   ├── auth/
│   │   ├── login.post.js
│   │   ├── register.post.js
│   │   ├── verify-otp.post.js
│   │   ├── resend-otp.post.js
│   │   ├── forgot-password.post.js
│   │   ├── reset-password.post.js
│   │   └── logout.post.js
│   ├── user/
│   │   ├── profile.get.js
│   │   ├── profile.put.js
│   │   ├── medical-info.put.js
│   │   ├── emergency-contacts.get.js
│   │   ├── emergency-contacts.post.js
│   │   ├── emergency-contacts.[id].delete.js
│   │   ├── vehicle-info.put.js
│   │   └── avatar.post.js
│   ├── emergency/
│   │   ├── activate.post.js
│   │   ├── cancel.post.js
│   │   ├── [id].get.js
│   │   ├── nearby.get.js (get alerts within 50km)
│   │   ├── accept.post.js
│   │   ├── update-status.post.js
│   │   ├── resolve.post.js
│   │   └── history.get.js
│   ├── responder/
│   │   ├── register.post.js
│   │   ├── verify.post.js
│   │   ├── status.put.js
│   │   └── stats.get.js
│   ├── safety/
│   │   ├── routes.get.js
│   │   ├── routes.post.js (rate a route)
│   │   ├── report-danger.post.js
│   │   ├── reports.get.js
│   │   ├── upvote-report.post.js
│   │   └── map-data.get.js (heatmap data)
│   ├── chat/
│   │   ├── messages.get.js
│   │   ├── send.post.js
│   │   └── [emergencyId].get.js
│   ├── donation/
│   │   ├── create.post.js
│   │   ├── webhook-paystack.post.js
│   │   ├── webhook-stripe.post.js
│   │   └── history.get.js
│   └── notifications/
│       ├── subscribe.post.js
│       └── send.post.js
├── middleware/
│   ├── auth.js (verify JWT token)
│   ├── error-handler.js
│   └── rate-limit.js
├── models/
│   ├── User.js
│   ├── Emergency.js
│   ├── EmergencyContact.js
│   ├── Responder.js
│   ├── Message.js
│   ├── SafetyReport.js
│   ├── RouteRating.js
│   ├── Donation.js
│   └── Notification.js
├── services/
│   ├── email.service.js (Resend)
│   ├── sms.service.js (Termii SMS)
│   ├── whatsapp.service.js (Termii WhatsApp)
│   ├── payment.service.js (Paystack + Stripe)
│   ├── geolocation.service.js
│   └── notification.service.js
├── utils/
│   ├── jwt.js
│   ├── validation.js
│   ├── distance.js
│   ├── encryption.js
│   └── cache.js
├── socket/
│   └── handlers/
│       ├── connection.js
│       ├── emergency.js
│       ├── location.js
│       ├── chat.js
│       └── responder.js
└── plugins/
    ├── mongoose.js
    └── socket.js
```

---

## Database Schema

### MongoDB Collections with Mongoose Models

#### **User Model**
```javascript
const UserSchema = new Schema({
  // Basic Info
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true }, // hashed
  name: { type: String, required: true },
  phone: { type: String, required: true },
  
  // Profile Picture (stored as base64 in DB)
  avatar: {
    data: String, // base64 encoded image
    contentType: String, // image/jpeg, image/png
    size: Number
  },
  
  // Location (GeoJSON for 2dsphere index)
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], default: [0, 0] } // [longitude, latitude]
  },
  lastLocationUpdate: Date,
  
  // Medical Information
  medicalInfo: {
    bloodType: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
    allergies: [String],
    medications: [String],
    conditions: [String],
    doctorContact: String
  },
  
  // Vehicle Information (Optional)
  vehicle: {
    make: String,
    model: String,
    color: String,
    plateNumber: String,
    year: Number
  },
  
  // Emergency Status
  inPanic: { type: Boolean, default: false },
  currentEmergency: { type: Schema.Types.ObjectId, ref: 'Emergency' },
  
  // Responder Info
  isResponder: { type: Boolean, default: true }, // Everyone is a responder by default
  isVerifiedResponder: { type: Boolean, default: false },
  responderType: { type: String, enum: ['regular', 'police', 'military', 'hotel', 'hospital', 'filling_station'] },
  verificationDetails: {
    organizationName: String,
    badge: String,
    verifiedAt: Date,
    verifiedBy: String
  },
  responderStats: {
    totalResponses: { type: Number, default: 0 },
    successfulHelps: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
  },
  
  // OTP & Verification
  otp: String,
  otpExpires: Date,
  isVerified: { type: Boolean, default: false },
  
  // Settings
  notificationPreferences: {
    push: { type: Boolean, default: true },
    sms: { type: Boolean, default: true },
    whatsapp: { type: Boolean, default: true },
    email: { type: Boolean, default: true }
  },
  
  // Metadata
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  lastActive: Date
}, { timestamps: true })

// 2dsphere index for geospatial queries
UserSchema.index({ location: '2dsphere' })
UserSchema.index({ email: 1 })
UserSchema.index({ phone: 1 })
```

#### **EmergencyContact Model**
```javascript
const EmergencyContactSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: String,
  relationship: { type: String, required: true }, // family, friend, spouse, etc.
  priority: { type: Number, default: 1 }, // 1 = highest priority
  whatsappEnabled: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true })

EmergencyContactSchema.index({ userId: 1 })
```

#### **Emergency Model**
```javascript
const EmergencySchema = new Schema({
  // User in Panic
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  
  // Emergency Details
  type: { type: String, enum: ['medical', 'security', 'accident', 'kidnapping', 'robbery', 'other'], required: true },
  description: { type: String, required: true },
  severity: { type: String, enum: ['low', 'medium', 'high', 'critical'], default: 'high' },
  
  // Location (GeoJSON)
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true } // [longitude, latitude]
  },
  address: String, // Human-readable address
  
  // Location History (for tracking movement during emergency)
  locationHistory: [{
    coordinates: [Number],
    timestamp: Date
  }],
  
  // Alert Mode
  alertMode: { type: String, enum: ['public', 'private'], default: 'public' },
  // public: broadcasts to 50km + emergency contacts
  // private: only emergency contacts
  
  // Status
  status: { type: String, enum: ['active', 'responding', 'resolved', 'cancelled'], default: 'active' },
  
  // Responders
  responders: [{
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    acceptedAt: Date,
    arrivedAt: Date,
    status: { type: String, enum: ['en_route', 'arrived', 'helping'] },
    distance: Number // Distance at time of acceptance
  }],
  
  // Emergency Contacts Notified
  contactsNotified: [{
    contactId: { type: Schema.Types.ObjectId, ref: 'EmergencyContact' },
    notifiedAt: Date,
    notificationMethod: [String], // ['sms', 'whatsapp', 'email']
    responded: { type: Boolean, default: false }
  }],
  
  // Media/Evidence
  media: [{
    data: String, // base64
    contentType: String,
    uploadedAt: Date
  }],
  
  // Resolution
  resolvedAt: Date,
  resolvedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  resolutionNotes: String,
  
  // Ratings & Reviews
  ratings: [{
    responderId: { type: Schema.Types.ObjectId, ref: 'User' },
    rating: Number,
    review: String,
    createdAt: Date
  }],
  
  // Timestamps
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { timestamps: true })

// 2dsphere index for finding emergencies within radius
EmergencySchema.index({ location: '2dsphere' })
EmergencySchema.index({ userId: 1, status: 1 })
EmergencySchema.index({ createdAt: -1 })
```

#### **Message Model (Chat)**
```javascript
const MessageSchema = new Schema({
  emergencyId: { type: Schema.Types.ObjectId, ref: 'Emergency', required: true },
  senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  type: { type: String, enum: ['text', 'image', 'location', 'status'], default: 'text' },
  
  // For media messages
  media: {
    data: String, // base64
    contentType: String
  },
  
  // Read status
  readBy: [{
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    readAt: Date
  }],
  
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true })

MessageSchema.index({ emergencyId: 1, createdAt: -1 })
```

#### **SafetyReport Model**
```javascript
const SafetyReportSchema = new Schema({
  reportedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  
  // Location of danger (GeoJSON)
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true }
  },
  address: String,
  
  // Report Details
  incidentType: { type: String, enum: ['robbery', 'kidnapping', 'accident', 'police_checkpoint', 'harassment', 'other'], required: true },
  description: String,
  severity: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  
  // Time relevance
  occurredAt: { type: Date, default: Date.now },
  
  // Community verification
  upvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  verificationScore: { type: Number, default: 0 },
  
  // Status
  status: { type: String, enum: ['active', 'resolved', 'disputed'], default: 'active' },
  expiresAt: Date, // Reports expire after 7 days
  
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true })

SafetyReportSchema.index({ location: '2dsphere' })
SafetyReportSchema.index({ expiresAt: 1 })
```

#### **RouteRating Model**
```javascript
const RouteRatingSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  
  // Route Definition (simplified)
  routeName: String, // e.g., "Lagos-Ibadan Expressway"
  startLocation: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: [Number]
  },
  endLocation: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: [Number]
  },
  
  // Rating
  safetyRating: { type: Number, min: 1, max: 5, required: true },
  timeOfDay: { type: String, enum: ['morning', 'afternoon', 'evening', 'night'] },
  
  // Details
  comment: String,
  travelDate: Date,
  
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true })

RouteRatingSchema.index({ routeName: 1 })
RouteRatingSchema.index({ startLocation: '2dsphere' })
```

#### **Donation Model**
```javascript
const DonationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' }, // Optional (anonymous donations)
  
  // Payment Details
  amount: { type: Number, required: true },
  currency: { type: String, default: 'NGN' },
  paymentMethod: { type: String, enum: ['paystack', 'stripe'] },
  
  // Transaction
  transactionId: { type: String, unique: true },
  reference: String,
  status: { type: String, enum: ['pending', 'successful', 'failed'], default: 'pending' },
  
  // Donor Info
  email: String,
  name: String,
  
  // Type
  recurring: { type: Boolean, default: false },
  frequency: { type: String, enum: ['one-time', 'monthly', 'yearly'] },
  
  // Receipt
  receiptUrl: String,
  receiptNumber: String,
  
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true })

DonationSchema.index({ userId: 1 })
DonationSchema.index({ transactionId: 1 })
```

#### **Notification Model**
```javascript
const NotificationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  
  type: { type: String, enum: ['emergency_alert', 'responder_accepted', 'emergency_resolved', 'safety_report', 'system'], required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  
  // Related entities
  emergencyId: { type: Schema.Types.ObjectId, ref: 'Emergency' },
  
  // Delivery status
  read: { type: Boolean, default: false },
  readAt: Date,
  
  // Channels used
  channels: {
    push: { sent: Boolean, sentAt: Date },
    sms: { sent: Boolean, sentAt: Date },
    whatsapp: { sent: Boolean, sentAt: Date },
    email: { sent: Boolean, sentAt: Date }
  },
  
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true })

NotificationSchema.index({ userId: 1, read: 1 })
NotificationSchema.index({ createdAt: -1 })
```

---

## Real-time Communication (Socket.io)

### Socket Server Setup
```javascript
// server/plugins/socket.js
import { Server } from 'socket.io'
import { verifyToken } from '~/server/utils/jwt'

export default defineNitroPlugin((nitroApp) => {
  const io = new Server(nitroApp.h3App.stack, {
    cors: {
      origin: process.env.CLIENT_URL || 'http://localhost:3000',
      credentials: true
    }
  })
  
  // Middleware: authenticate socket connections
  io.use(async (socket, next) => {
    const token = socket.handshake.auth.token
    if (!token) return next(new Error('Authentication error'))
    
    try {
      const user = await verifyToken(token)
      socket.userId = user.id
      next()
    } catch (error) {
      next(new Error('Invalid token'))
    }
  })
  
  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.userId}`)
    
    // Join user to their personal room
    socket.join(`user:${socket.userId}`)
    
    // Import handlers
    handleEmergency(io, socket)
    handleLocation(io, socket)
    handleChat(io, socket)
    handleResponder(io, socket)
    
    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.userId}`)
    })
  })
  
  nitroApp.io = io
})
```

### Emergency Handler
```javascript
// server/socket/handlers/emergency.js
export const handleEmergency = (io, socket) => {
  // When panic is activated
  socket.on('emergency:activate', async (data) => {
    // 1. Create emergency in DB
    // 2. Find all users within 50km
    // 3. Find user's emergency contacts
    // 4. Emit alerts to all nearby users and contacts
    
    const nearbyUsers = await findUsersWithinRadius(data.location, 50000) // 50km in meters
    const emergencyContacts = await getEmergencyContacts(socket.userId)
    
    // Emit to nearby users
    nearbyUsers.forEach(user => {
      io.to(`user:${user._id}`).emit('emergency:alert', {
        emergencyId: emergency._id,
        userId: socket.userId,
        location: data.location,
        type: data.type,
        description: data.description,
        distance: calculateDistance(user.location, data.location)
      })
    })
    
    // Emit to emergency contacts
    emergencyContacts.forEach(contact => {
      // Send push notification, SMS, WhatsApp
      sendMultiChannelNotification(contact, emergency)
    })
  })
  
  // When responder accepts alert
  socket.on('emergency:accept', async (data) => {
    const { emergencyId } = data
    
    // 1. Add responder to emergency
    // 2. Join emergency room
    socket.join(`emergency:${emergencyId}`)
    
    // 3. Notify panic user
    io.to(`emergency:${emergencyId}`).emit('responder:accepted', {
      responderId: socket.userId,
      responderName: data.responderName,
      responderLocation: data.responderLocation,
      estimatedArrival: data.estimatedArrival
    })
  })

  // Location updates during emergency
  socket.on('location:update', async (data) => {
    const { emergencyId, location } = data

    // Update user's location in DB
    await updateUserLocation(socket.userId, location)

    // Broadcast to emergency room
    io.to(`emergency:${emergencyId}`).emit('location:updated', {
      userId: socket.userId,
      location,
      timestamp: new Date()
    })
  })

  // Emergency status updates
  socket.on('emergency:status', async (data) => {
    const { emergencyId, status } = data

    // Update emergency in DB
    await updateEmergencyStatus(emergencyId, status)

    // Notify all participants
    io.to(`emergency:${emergencyId}`).emit('emergency:status_updated', {
      emergencyId,
      status,
      updatedBy: socket.userId,
      timestamp: new Date()
    })
  })

  // Emergency cancellation
  socket.on('emergency:cancel', async (data) => {
    const { emergencyId } = data

    // Update emergency status
    await cancelEmergency(emergencyId)

    // Notify all responders and emergency contacts
    io.to(`emergency:${emergencyId}`).emit('emergency:cancelled', {
      emergencyId,
      cancelledBy: socket.userId,
      timestamp: new Date()
    })

    // Remove all users from emergency room
    io.sockets.in(`emergency:${emergencyId}`).socketsLeave(`emergency:${emergencyId}`)
  })
}

### Location Handler
```javascript
// server/socket/handlers/location.js
export const handleLocation = (io, socket) => {
  // Start location sharing
  socket.on('location:share:start', async () => {
    socket.join('location_sharing')

    // Update user status as tracking
    await setUserTrackingStatus(socket.userId, true)

    socket.emit('location:sharing:started', {
      tracking: true,
      timestamp: new Date()
    })
  })

  // Stop location sharing
  socket.on('location:share:stop', async () => {
    socket.leave('location_sharing')

    // Update user status as not tracking
    await setUserTrackingStatus(socket.userId, false)

    socket.emit('location:sharing:stopped', {
      tracking: false,
      timestamp: new Date()
    })
  })

  // Real-time location updates
  socket.on('location:update', async (data) => {
    const { coordinates, accuracy, speed } = data

    // Update in database
    await updateUserLocation(socket.userId, {
      type: 'Point',
      coordinates,
      accuracy,
      speed,
      timestamp: new Date()
    })

    // Notify relevant emergency rooms if user is in panic
    const activeEmergency = await getActiveEmergency(socket.userId)
    if (activeEmergency) {
      io.to(`emergency:${activeEmergency._id}`).emit('responder:location', {
        responderId: socket.userId,
        coordinates,
        accuracy,
        speed,
        timestamp: new Date()
      })
    }
  })
}
```

### Chat Handler
```javascript
// server/socket/handlers/chat.js
export const handleChat = (io, socket) => {
  // Join emergency chat room
  socket.on('chat:join', async (emergencyId) => {
    socket.join(`chat:${emergencyId}`)

    // Get chat history
    const messages = await getChatHistory(emergencyId)
    socket.emit('chat:history', messages)
  })

  // Send message
  socket.on('chat:message', async (data) => {
    const { emergencyId, content, type = 'text' } = data

    // Save message to database
    const message = await saveMessage({
      emergencyId,
      senderId: socket.userId,
      content,
      type,
      timestamp: new Date()
    })

    // Broadcast to chat room
    io.to(`chat:${emergencyId}`).emit('chat:message', message)
  })

  // Mark messages as read
  socket.on('chat:read', async (messageIds) => {
    await markMessagesAsRead(socket.userId, messageIds)

    // Notify other participants
    socket.broadcast.emit('chat:read_receipt', {
      userId: socket.userId,
      messageIds,
      timestamp: new Date()
    })
  })
}
```

### Responder Handler
```javascript
// server/socket/handlers/responder.js
export const handleResponder = (io, socket) => {
  // Update responder availability
  socket.on('responder:availability', async (available) => {
    await updateResponderAvailability(socket.userId, available)

    socket.emit('responder:availability_updated', {
      available,
      timestamp: new Date()
    })
  })

  // Responder accepts emergency
  socket.on('responder:accept', async (emergencyId) => {
    // Add responder to emergency
    await addResponderToEmergency(emergencyId, socket.userId)

    // Join emergency rooms
    socket.join(`emergency:${emergencyId}`)
    socket.join(`chat:${emergencyId}`)

    // Notify panic user
    const responder = await getUserById(socket.userId)
    io.to(`emergency:${emergencyId}`).emit('responder:joined', {
      responderId: socket.userId,
      responderName: responder.name,
      responderAvatar: responder.avatar,
      timestamp: new Date()
    })
  })

  // Update responder status (en_route, arrived, helping)
  socket.on('responder:status', async (data) => {
    const { emergencyId, status } = data

    await updateResponderStatus(socket.userId, emergencyId, status)

    io.to(`emergency:${emergencyId}`).emit('responder:status_updated', {
      responderId: socket.userId,
      status,
      timestamp: new Date()
    })
  })
}
```

---

## Authentication & Security

### Authentication System
```javascript
// server/api/auth/login.post.js
export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)

  try {
    // Find user
    const user = await User.findOne({ email }).select('+password')
    if (!user) {
      throw createError({
        statusCode: 401,
        message: 'Invalid credentials'
      })
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      throw createError({
        statusCode: 401,
        message: 'Invalid credentials'
      })
    }

    // Generate OTP for 2FA
    const otp = generateOTP()
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000) // 10 minutes

    await User.findByIdAndUpdate(user._id, {
      otp,
      otpExpires,
      isVerified: false // Require OTP verification for each login
    })

    // Send OTP via email
    await sendOTPEmail(user.email, otp)

    return {
      success: true,
      message: 'OTP sent to your email',
      requiresOTP: true,
      userId: user._id
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error.message
    })
  }
})

// server/api/auth/verify-otp.post.js
export default defineEventHandler(async (event) => {
  const { userId, otp } = await readBody(event)

  try {
    const user = await User.findById(userId)
    if (!user || user.otp !== otp || user.otpExpires < new Date()) {
      throw createError({
        statusCode: 401,
        message: 'Invalid or expired OTP'
      })
    }

    // Mark user as verified
    await User.findByIdAndUpdate(userId, {
      isVerified: true,
      otp: null,
      otpExpires: null,
      lastLogin: new Date()
    })

    // Generate JWT token
    const token = generateJWTToken(user)

    // Set HTTP-only cookie
    setCookie(event, 'auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 // 7 days
    })

    return {
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        avatar: user.avatar
      }
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error.message
    })
  }
})
```

### Security Middleware
```javascript
// server/middleware/auth.js
export default defineEventHandler(async (event) => {
  // Skip auth for certain routes
  const publicRoutes = ['/api/auth/login', '/api/auth/register', '/api/auth/verify-otp']
  if (publicRoutes.includes(event.path)) return

  const token = getCookie(event, 'auth-token') || getHeader(event, 'authorization')

  if (!token) {
    throw createError({
      statusCode: 401,
      message: 'Authentication required'
    })
  }

  try {
    const decoded = verifyJWTToken(token)
    event.context.user = decoded
  } catch (error) {
    throw createError({
      statusCode: 401,
      message: 'Invalid token'
    })
  }
})

// server/utils/jwt.js
export const generateJWTToken = (user) => {
  return jwt.sign(
    {
      userId: user._id,
      email: user.email
    },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  )
}

export const verifyJWTToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}
```

### Email Service (Resend)
```javascript
// server/services/email.service.js
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendOTPEmail = async (email, otp) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'SafeRoute <noreply@safesafe.ng>',
      to: [email],
      subject: 'SafeRoute - Your OTP Code',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #002455;">SafeRoute - Emergency Authentication</h2>
          <p>Your OTP code is:</p>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <span style="font-size: 24px; font-weight: bold; letter-spacing: 3px; color: #FF3838;">${otp}</span>
          </div>
          <p>This code expires in 10 minutes. Do not share this code with anyone.</p>
          <p style="color: #666; font-size: 14px;">If you didn't request this code, please ignore this email.</p>
        </div>
      `
    })

    if (error) {
      console.error('Email send error:', error)
      throw new Error('Failed to send OTP email')
    }

    return data
  } catch (error) {
    console.error('Email service error:', error)
    throw error
  }
}
```

---

## Geolocation & Maps

### Google Maps Integration
```javascript
// app/plugins/google-maps.client.js
export default defineNuxtPlugin(() => {
  if (process.client) {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places,geometry`
    script.async = true
    script.defer = true
    document.head.appendChild(script)
  }
})

// app/composables/useMap.js
export const useMap = () => {
  const map = ref(null)
  const markers = ref([])
  const directionsService = ref(null)
  const directionsRenderer = ref(null)

  const initializeMap = (elementId, center = { lat: 6.5244, lng: 3.3792 }) => {
    if (process.client && window.google) {
      map.value = new window.google.maps.Map(document.getElementById(elementId), {
        center,
        zoom: 13,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      })

      directionsService.value = new window.google.maps.DirectionsService()
      directionsRenderer.value = new window.google.maps.DirectionsRenderer({
        draggable: true
      })
      directionsRenderer.value.setMap(map.value)
    }
  }

  const addMarker = (position, options = {}) => {
    if (!map.value) return null

    const marker = new window.google.maps.Marker({
      position,
      map: map.value,
      ...options
    })

    markers.value.push(marker)
    return marker
  }

  const addPanicMarker = (position) => {
    return addMarker(position, {
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 8,
        fillColor: '#FF3838',
        fillOpacity: 0.8,
        strokeColor: '#FFFFFF',
        strokeWeight: 2
      },
      animation: window.google.maps.Animation.BOUNCE
    })
  }

  const addResponderMarker = (position, responderInfo) => {
    return addMarker(position, {
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 6,
        fillColor: '#002455',
        fillOpacity: 0.8,
        strokeColor: '#FFFFFF',
        strokeWeight: 2
      },
      title: responderInfo.name
    })
  }

  const calculateRoute = (origin, destination) => {
    return new Promise((resolve, reject) => {
      if (!directionsService.value) {
        reject(new Error('Directions service not initialized'))
        return
      }

      directionsService.value.route({
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING
      }, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          directionsRenderer.value.setDirections(result)
          resolve(result)
        } else {
          reject(new Error(`Directions request failed: ${status}`))
        }
      })
    })
  }

  const updateMarkerPosition = (marker, position) => {
    if (marker && window.google) {
      marker.setPosition(new window.google.maps.LatLng(position.lat, position.lng))
    }
  }

  return {
    map,
    markers,
    initializeMap,
    addMarker,
    addPanicMarker,
    addResponderMarker,
    calculateRoute,
    updateMarkerPosition
  }
}
```

### High-Precision Location Service
```javascript
// app/composables/useGeolocation.js
export const useGeolocation = () => {
  const location = ref(null)
  const watching = ref(false)
  const watchId = ref(null)
  const error = ref(null)
  const accuracy = ref(null)

  const getCurrentLocation = (options = {}) => {
    const defaultOptions = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }

    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation not supported'))
        return
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          location.value = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          accuracy.value = position.coords.accuracy
          error.value = null
          resolve(location.value)
        },
        (err) => {
          error.value = err.message
          reject(err)
        },
        { ...defaultOptions, ...options }
      )
    })
  }

  const watchLocation = (callback, options = {}) => {
    if (watching.value) return watchId.value

    const defaultOptions = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 5000 // 5 seconds maximum age for cached data
    }

    watchId.value = navigator.geolocation.watchPosition(
      (position) => {
        const newLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        location.value = newLocation
        accuracy.value = position.coords.accuracy
        error.value = null

        if (callback) callback(newLocation)
      },
      (err) => {
        error.value = err.message
        if (callback) callback(null, err)
      },
      { ...defaultOptions, ...options }
    )

    watching.value = true
    return watchId.value
  }

  const stopWatching = () => {
    if (watchId.value !== null) {
      navigator.geolocation.clearWatch(watchId.value)
      watchId.value = null
      watching.value = false
    }
  }

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3 // Earth's radius in meters
    const φ1 = lat1 * Math.PI / 180
    const φ2 = lat2 * Math.PI / 180
    const Δφ = (lat2 - lat1) * Math.PI / 180
    const Δλ = (lon2 - lon1) * Math.PI / 180

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))

    return R * c // Distance in meters
  }

  return {
    location,
    watching,
    error,
    accuracy,
    getCurrentLocation,
    watchLocation,
    stopWatching,
    calculateDistance
  }
}
```

### Offline Map Caching (Service Worker)
```javascript
// public/sw.js
const CACHE_NAME = 'safesoute-v1'
const TILES_CACHE_NAME = 'map-tiles-v1'

// Cache critical emergency data
const CACHE_URLS = [
  '/',
  '/emergency',
  '/offline.html',
  '/manifest.json'
]

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CACHE_URLS))
  )
})

// Cache map tiles when available
self.addEventListener('fetch', (event) => {
  const { request } = event

  // Handle map tiles caching
  if (request.url.includes('maps.googleapis.com/maps/vt')) {
    event.respondWith(
      caches.open(TILES_CACHE_NAME).then((cache) => {
        return cache.match(request).then((response) => {
          return response || fetch(request).then((response) => {
            // Cache successful map tile responses
            if (response.ok) {
              cache.put(request, response.clone())
            }
            return response
          }).catch(() => {
            // Return cached version if network fails
            return cache.match(request)
          })
        })
      })
    )
    return
  }

  // Handle other requests
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match(request).then((response) => {
        return response || fetch(request).catch(() => {
          return caches.match('/offline.html')
        })
      })
    )
  }
})
```

---

## File Storage Strategy

### Database Storage with Caching
```javascript
// server/utils/file-storage.js
import { createHash } from 'crypto'

// Store files as base64 with caching
export const storeFile = async (fileBuffer, contentType, userId) => {
  // Generate unique identifier
  const fileHash = createHash('sha256').update(fileBuffer).digest('hex')
  const cacheKey = `file:${fileHash}`

  // Check if already cached (Redis for hot files)
  // const cachedFile = await redis.get(cacheKey)
  // if (cachedFile) {
  //   return { fileUrl: `/api/files/${fileHash}`, cached: true }
  // }

  // Store in database
  const fileData = {
    data: fileBuffer.toString('base64'),
    contentType,
    size: fileBuffer.length,
    hash: fileHash,
    uploadedBy: userId,
    uploadedAt: new Date()
  }

  // Save to MongoDB
  const savedFile = await saveFileToDatabase(fileData)

  // Cache the file (Redis)
  // await redis.setex(cacheKey, 3600, fileBuffer.toString('base64')) // 1 hour cache

  return {
    fileUrl: `/api/files/${savedFile._id}`,
    fileId: savedFile._id,
    size: fileData.size,
    cached: false
  }
}

// Retrieve file with caching
export const retrieveFile = async (fileId) => {
  // Try cache first
  // const cacheKey = `file:${fileId}`
  // let cachedFile = await redis.get(cacheKey)

  // if (cachedFile) {
  //   return {
  //     data: Buffer.from(cachedFile, 'base64'),
  //     fromCache: true
  //   }
  // }

  // Fallback to database
  const file = await getFileFromDatabase(fileId)
  if (!file) {
    throw new Error('File not found')
  }

  // Cache the result
  // await redis.setex(cacheKey, 3600, file.data) // 1 hour cache

  return {
    data: Buffer.from(file.data, 'base64'),
    contentType: file.contentType,
    size: file.size,
    fromCache: false
  }
}

// server/api/files/[fileId].get.js
export default defineEventHandler(async (event) => {
  const fileId = getRouterParam(event, 'fileId')

  try {
    const file = await retrieveFile(fileId)

    setHeader(event, 'Content-Type', file.contentType)
    setHeader(event, 'Content-Length', file.size)
    setHeader(event, 'Cache-Control', 'public, max-age=3600') // 1 hour cache

    return file.data
  } catch (error) {
    throw createError({
      statusCode: 404,
      message: 'File not found'
    })
  }
})
```

### File Upload Handler
```javascript
// server/api/upload.post.js
export default defineEventHandler(async (event) => {
  const user = event.context.user
  const formData = await readMultipartFormData(event)

  if (!formData || formData.length === 0) {
    throw createError({
      statusCode: 400,
      message: 'No file uploaded'
    })
  }

  try {
    const file = formData[0]
    const { data: fileBuffer, name: filename, type: contentType } = file

    // Validate file size (max 10MB)
    if (fileBuffer.length > 10 * 1024 * 1024) {
      throw createError({
        statusCode: 400,
        message: 'File too large. Maximum size is 10MB'
      })
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'video/mp4']
    if (!allowedTypes.includes(contentType)) {
      throw createError({
        statusCode: 400,
        message: 'Invalid file type. Only images and videos allowed'
      })
    }

    // Store file
    const result = await storeFile(fileBuffer, contentType, user.userId)

    return {
      success: true,
      fileUrl: result.fileUrl,
      fileId: result.fileId,
      size: result.size
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error.message
    })
  }
})
```

---

## Payment Integration

### Dual Payment Gateway Setup
```javascript
// server/utils/payment.js
import { initializePayment: initializePaystack, verifyPayment: verifyPaystack } from './paystack'
import { initializePayment: initializeStripe, verifyPayment: verifyStripe } from './stripe'

// Unified payment interface
export const processDonation = async (paymentData) => {
  const { amount, currency = 'NGN', email, paymentMethod, name } = paymentData

  if (currency === 'NGN' || paymentMethod === 'paystack') {
    // Use Paystack for Nigerian transactions
    return await initializePaystack({
      email,
      amount,
      currency,
      name
    })
  } else if (paymentMethod === 'stripe' || currency !== 'NGN') {
    // Use Stripe for international transactions
    return await initializeStripe({
      email,
      amount,
      currency,
      name
    })
  } else {
    throw new Error('Invalid payment configuration')
  }
}

// Unified payment verification
export const verifyDonation = async (reference, paymentMethod) => {
  if (paymentMethod === 'paystack') {
    return await verifyPaystack(reference)
  } else if (paymentMethod === 'stripe') {
    return await verifyStripe(reference)
  } else {
    throw new Error('Invalid payment method for verification')
  }
}

// server/utils/paystack.js
export const initializePayment = async ({ email, amount, currency, name }) => {
  const response = await fetch('https://api.paystack.co/transaction/initialize', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      amount: amount * 100, // Convert to kobo
      currency,
      callback_url: `${process.env.CLIENT_URL}/donation/success`,
      metadata: {
        name,
        type: 'donation'
      }
    })
  })

  const data = await response.json()

  if (!data.status) {
    throw new Error(data.message || 'Paystack initialization failed')
  }

  return {
    authorization_url: data.data.authorization_url,
    reference: data.data.reference,
    access_code: data.data.access_code,
    paymentMethod: 'paystack'
  }
}

export const verifyPayment = async (reference) => {
  const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
    headers: {
      'Authorization': `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
    }
  })

  const data = await response.json()

  if (!data.status) {
    throw new Error(data.message || 'Paystack verification failed')
  }

  return {
    status: data.data.status,
    amount: data.data.amount / 100, // Convert back to naira
    currency: data.data.currency,
    reference: data.data.reference,
    customer: data.data.customer,
    paid_at: data.data.paid_at,
    paymentMethod: 'paystack'
  }
}

// server/utils/stripe.js
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const initializePayment = async ({ email, amount, currency, name }) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [{
        price_data: {
          currency: currency.toLowerCase(),
          product_data: {
            name: 'SafeRoute Donation',
            description: 'Support SafeRoute emergency response system'
          },
          unit_amount: amount * 100 // Convert to cents
        },
        quantity: 1
      }],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/donation/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/donation/cancel`,
      metadata: {
        name,
        type: 'donation'
      }
    })

    return {
      authorization_url: session.url,
      reference: session.id,
      paymentMethod: 'stripe'
    }
  } catch (error) {
    throw new Error(`Stripe initialization failed: ${error.message}`)
  }
}

export const verifyPayment = async (sessionId) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid') {
      throw new Error('Payment not completed')
    }

    return {
      status: 'success',
      amount: session.amount_total / 100, // Convert back to dollars
      currency: session.currency.toUpperCase(),
      reference: session.id,
      customer: {
        email: session.customer_details.email,
        name: session.customer_details.name
      },
      paid_at: new Date(session.created * 1000).toISOString(),
      paymentMethod: 'stripe'
    }
  } catch (error) {
    throw new Error(`Stripe verification failed: ${error.message}`)
  }
}
```

### Donation Management
```javascript
// server/api/donation/create.post.js
export default defineEventHandler(async (event) => {
  const { amount, currency, email, name, recurring, frequency } = await readBody(event)
  const user = event.context.user

  try {
    // Initialize payment
    const paymentResult = await processDonation({
      amount,
      currency,
      email,
      name: name || user?.name,
      paymentMethod: currency === 'NGN' ? 'paystack' : 'stripe'
    })

    // Save donation record
    const donation = await Donation.create({
      userId: user?.userId,
      amount,
      currency,
      email,
      name: name || user?.name,
      transactionId: paymentResult.reference,
      paymentMethod: paymentResult.paymentMethod,
      recurring: recurring || false,
      frequency: frequency || 'one-time',
      status: 'pending'
    })

    return {
      success: true,
      donationId: donation._id,
      paymentUrl: paymentResult.authorization_url,
      reference: paymentResult.reference
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error.message
    })
  }
})

// Webhook handlers
// server/api/webhooks/paystack.post.js
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const signature = getHeader(event, 'x-paystack-signature')

  // Verify webhook signature
  if (!verifyPaystackWebhook(body, signature)) {
    throw createError({
      statusCode: 401,
      message: 'Invalid webhook signature'
    })
  }

  if (body.event === 'charge.success') {
    await updateDonationStatus(body.data.reference, 'successful', body.data)
  } else if (body.event === 'charge.failed') {
    await updateDonationStatus(body.data.reference, 'failed', body.data)
  }

  return { success: true }
})
```

---

## Notification System

### Multi-Channel Notification Service
```javascript
// server/services/notification.service.js
import { sendSMS } from './sms.service'
import { sendWhatsApp } from './whatsapp.service'
import { sendEmail } from './email.service'

export class NotificationService {
  static async sendEmergencyAlert(emergency, user, nearbyUsers, emergencyContacts) {
    const notifications = []

    // 1. Push notifications to nearby users
    for (const nearbyUser of nearbyUsers) {
      notifications.push(
        this.sendPushNotification(nearbyUser, {
          title: 'Emergency Alert',
          message: `${user.name} needs help ${calculateDistance(nearbyUser.location, emergency.location)}km away`,
          type: 'emergency_alert',
          data: { emergencyId: emergency._id }
        })
      )
    }

    // 2. SMS to emergency contacts
    for (const contact of emergencyContacts) {
      notifications.push(
        sendSMS(contact.phone, `EMERGENCY: ${user.name} needs help! Location: ${emergency.address}. Immediate assistance required.`)
      )
    }

    // 3. WhatsApp to contacts with WhatsApp enabled
    const whatsappContacts = emergencyContacts.filter(c => c.whatsappEnabled)
    for (const contact of whatsappContacts) {
      notifications.push(
        sendWhatsApp(contact.phone, `🚨 EMERGENCY ALERT\n\n${user.name} needs help!\n\n📍 Location: ${emergency.address}\n📞 Please contact them immediately.`)
      )
    }

    // 4. Email notifications (for detailed information)
    notifications.push(
      sendEmail(user.email, 'Emergency Alert Activated', this.generateEmergencyEmailTemplate(emergency, user))
    )

    // Execute all notifications
    const results = await Promise.allSettled(notifications)
    return results
  }

  static async sendResponderAccepted(responder, emergency, panicUser) {
    // Notify panic user about responder acceptance
    await this.sendPushNotification(panicUser, {
      title: 'Help is on the way!',
      message: `${responder.name} is responding to your emergency`,
      type: 'responder_accepted',
      data: { responderId: responder._id, emergencyId: emergency._id }
    })

    // Send SMS to panic user
    await sendSMS(panicUser.phone, `SafeRoute: ${responder.name} is responding to your emergency. Distance: ${calculateDistance(responder.location, emergency.location)}km`)
  }

  static async sendEmergencyResolved(emergency, user, responders) {
    // Notify all participants
    const participants = [user, ...responders]

    for (const participant of participants) {
      await this.sendPushNotification(participant, {
        title: 'Emergency Resolved',
        message: 'The emergency has been resolved successfully',
        type: 'emergency_resolved',
        data: { emergencyId: emergency._id }
      })

      await sendEmail(
        participant.email,
        'Emergency Resolved - Thank You',
        this.generateResolutionEmailTemplate(emergency, responders)
      )
    }
  }

  static generateEmergencyEmailTemplate(emergency, user) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #FF3838; color: white; padding: 20px; text-align: center;">
          <h1>🚨 EMERGENCY ALERT</h1>
        </div>
        <div style="padding: 20px;">
          <h2>${user.name} Needs Help</h2>
          <p><strong>Type:</strong> ${emergency.type}</p>
          <p><strong>Description:</strong> ${emergency.description}</p>
          <p><strong>Location:</strong> ${emergency.address}</p>
          <p><strong>Time:</strong> ${new Date(emergency.createdAt).toLocaleString()}</p>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3>Emergency Information:</h3>
            <p><strong>Blood Type:</strong> ${user.medicalInfo?.bloodType || 'Not specified'}</p>
            <p><strong>Allergies:</strong> ${user.medicalInfo?.allergies?.join(', ') || 'None specified'}</p>
            <p><strong>Medications:</strong> ${user.medicalInfo?.medications?.join(', ') || 'None specified'}</p>
          </div>
          <p style="color: #666;">This is an automated emergency alert from SafeRoute.</p>
        </div>
      </div>
    `
  }
}

// Termii SMS Service
// server/services/sms.service.js
export const sendSMS = async (phone, message) => {
  try {
    const response = await fetch('https://api.ng.termii.com/api/sms/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.TERMII_API_KEY}`
      },
      body: JSON.stringify({
        to: phone,
        from: 'SafeRoute',
        sms: message,
        type: 'plain',
        channel: 'generic',
        api_key: process.env.TERMII_API_KEY
      })
    })

    const data = await response.json()

    if (data.message_id) {
      return { success: true, messageId: data.message_id }
    } else {
      throw new Error(data.message || 'SMS sending failed')
    }
  } catch (error) {
    console.error('SMS service error:', error)
    throw error
  }
}

// Termii WhatsApp Service
// server/services/whatsapp.service.js
export const sendWhatsApp = async (phone, message) => {
  try {
    const response = await fetch('https://api.ng.termii.com/api/whatsapp/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.TERMII_API_KEY}`
      },
      body: JSON.stringify({
        to: `234${phone.slice(-10)}`, // Format Nigerian number
        from: 'SafeRoute',
        message: message,
        channel: 'whatsapp',
        api_key: process.env.TERMII_API_KEY
      })
    })

    const data = await response.json()

    if (data.message_id) {
      return { success: true, messageId: data.message_id }
    } else {
      throw new Error(data.message || 'WhatsApp sending failed')
    }
  } catch (error) {
    console.error('WhatsApp service error:', error)
    throw error
  }
}
```

### Push Notifications (Web Push)
```javascript
// app/composables/useNotifications.js
export const useNotifications = () => {
  const subscription = ref(null)
  const supported = ref(false)

  const init = async () => {
    if (process.client && 'serviceWorker' in navigator && 'PushManager' in window) {
      supported.value = true

      // Register service worker
      const registration = await navigator.serviceWorker.register('/sw.js')

      // Get existing subscription
      subscription.value = await registration.pushManager.getSubscription()

      if (!subscription.value) {
        // Request permission and subscribe
        const permission = await Notification.requestPermission()
        if (permission === 'granted') {
          subscription.value = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(process.env.VAPID_PUBLIC_KEY)
          })

          // Send subscription to server
          await saveSubscription(subscription.value)
        }
      }
    }
  }

  const sendTestNotification = async () => {
    if (subscription.value) {
      await fetch('/api/notifications/test', {
        method: 'POST',
        body: JSON.stringify({
          subscription: subscription.value
        })
      })
    }
  }

  return {
    subscription,
    supported,
    init,
    sendTestNotification
  }
}

// server/api/notifications/subscribe.post.js
export default defineEventHandler(async (event) => {
  const { endpoint, keys, auth } = await readBody(event)
  const user = event.context.user

  try {
    await Notification.create({
      userId: user.userId,
      endpoint,
      p256dhKey: keys.p256dh,
      authKey: auth,
      active: true
    })

    return { success: true }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Failed to save subscription'
    })
  }
})
```

---

## API Routes Structure

### Complete API Endpoints
```javascript
// server/api/auth/
├── login.post.js                 // User login with OTP
├── register.post.js              // User registration
├── verify-otp.post.js            // OTP verification
├── resend-otp.post.js            // Resend OTP
├── logout.post.js                // User logout
└── profile.get.js                // Get user profile

// server/api/user/
├── profile.put.js                // Update user profile
├── medical-info.put.js           // Update medical information
├── emergency-contacts/
│   ├── index.get.js             // Get emergency contacts
│   ├── index.post.js            // Add emergency contact
│   └── [id].delete.js           // Delete emergency contact
├── vehicle-info.put.js           // Update vehicle information
└── avatar.post.js                // Upload profile picture

// server/api/emergency/
├── activate.post.js              // Trigger panic button
├── cancel.post.js                // Cancel emergency
├── [id].get.js                   // Get emergency details
├── nearby.get.js                 // Get nearby emergencies (50km)
├── accept.post.js                // Accept emergency as responder
├── update-status.post.js         // Update emergency status
├── resolve.post.js               // Mark emergency as resolved
└── history.get.js                // Get user's emergency history

// server/api/responder/
├── register.post.js              // Register as verified responder
├── verify.post.js                // Verify responder credentials
├── status.put.js                 // Update responder availability
└── stats.get.js                  // Get responder statistics

// server/api/safety/
├── routes.get.js                 // Get route safety ratings
├── routes.post.js                // Submit route rating
├── report-danger.post.js         // Report dangerous area
├── reports.get.js                // Get safety reports
├── upvote-report.post.js         // Upvote safety report
└── map-data.get.js               // Get heatmap data for maps

// server/api/chat/
├── messages.get.js               // Get chat messages
├── send.post.js                  // Send chat message
└── [emergencyId].get.js          // Get chat for specific emergency

// server/api/donation/
├── create.post.js                // Create donation
├── webhooks/
│   ├── paystack.post.js          // Paystack webhook
│   └── stripe.post.js            // Stripe webhook
└── history.get.js                // Get donation history

// server/api/notifications/
├── subscribe.post.js             // Subscribe to push notifications
├── test.post.js                  // Send test notification
└── send.post.js                  // Send notification

// server/api/files/
├── upload.post.js                // Upload file
└── [fileId].get.js               // Retrieve file

// server/api/location/
├── update.post.js                // Update user location
├── nearby.get.js                 // Find nearby users/services
└── services.get.js               // Get nearby emergency services
```

### API Response Standards
```javascript
// utils/api-response.js
export const successResponse = (data, message = 'Success') => ({
  success: true,
  message,
  data,
  timestamp: new Date().toISOString()
})

export const errorResponse = (message, statusCode = 500, code = null) => ({
  success: false,
  message,
  error: code,
  timestamp: new Date().toISOString()
})

// Standard middleware for error handling
export const apiHandler = (handler) => {
  return defineEventHandler(async (event) => {
    try {
      return await handler(event)
    } catch (error) {
      console.error('API Error:', error)

      throw createError({
        statusCode: error.statusCode || 500,
        statusMessage: error.message || 'Internal server error'
      })
    }
  })
}
```

---

## Deployment Architecture

### Vercel Deployment Configuration
```javascript
// nuxt.config.js
export default defineNuxtConfig({
  nitro: {
    preset: 'vercel',
    experimental: {
      wasm: true
    }
  },

  // Environment variables for deployment
  runtimeConfig: {
    // Public keys (available on client)
    public: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      vapidPublicKey: process.env.VAPID_PUBLIC_KEY,
      resendApiKey: process.env.RESEND_API_KEY
    },

    // Private keys (server only)
    mongodbUri: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET,
    paystackSecretKey: process.env.PAYSTACK_SECRET_KEY,
    paystackPublicKey: process.env.PAYSTACK_PUBLIC_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    termiiApiKey: process.env.TERMII_API_KEY,
      resendApiKey: process.env.RESEND_API_KEY
    }
  },

  // PWA configuration
  modules: [
    '@nuxtjs/pwa',
    '@pinia/nuxt',
  ],

  pwa: {
    manifest: {
      name: 'SafeRoute - Emergency Response',
      short_name: 'SafeRoute',
      description: 'Emergency response and safety network for Nigerian travelers',
      theme_color: '#002455',
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait'
    },

    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/maps\.googleapis\.com\/maps\/vt\//,
          handler: 'CacheFirst',
          options: {
            cacheName: 'map-tiles',
            expiration: {
              maxEntries: 1000,
              maxAgeSeconds: 60 * 60 * 24 * 7 // 1 week
            }
          }
        }
      ]
    }
  },

  // Performance optimizations
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#002455' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'manifest', href: '/manifest.json' }
      ]
    }
  }
})
```

### Environment Variables Setup
```bash
# .env.example

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/saferoute

# Authentication
JWT_SECRET=your-super-secret-jwt-key-here

# Google Maps
GOOGLE_MAPS_API_KEY=your-google-maps-api-key

# Payment Gateways
PAYSTACK_SECRET_KEY=sk_test_xxxxxxxxxx
PAYSTACK_PUBLIC_KEY=pk_test_xxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxx
STRIPE_PUBLIC_KEY=pk_test_xxxxxxxxxx

# Communication Services
TERMII_API_KEY=your-termii-api-key
RESEND_API_KEY=re_xxxxxxxxxx

# Web Push Notifications
VAPID_PUBLIC_KEY=your-vapid-public-key
VAPID_PRIVATE_KEY=your-vapid-private-key

# Application URLs
CLIENT_URL=https://your-domain.vercel.app
SERVER_URL=https://your-api.vercel.app
```

### MongoDB Atlas Configuration
```javascript
// Database connection setup with optimized indexes
// server/plugins/mongodb.js
import mongoose from 'mongoose'

export default defineNitroPlugin(async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      bufferMaxEntries: 0, // Disable mongoose buffering
      bufferCommands: false // Disable mongoose buffering
    })

    console.log('MongoDB connected successfully')

    // Ensure critical indexes exist
    await ensureIndexes()

  } catch (error) {
    console.error('MongoDB connection error:', error)
    process.exit(1)
  }
})

const ensureIndexes = async () => {
  // User indexes
  await User.collection.createIndex({ location: '2dsphere' })
  await User.collection.createIndex({ email: 1 }, { unique: true })
  await User.collection.createIndex({ phone: 1 })
  await User.collection.createIndex({ isVerifiedResponder: 1 })

  // Emergency indexes
  await Emergency.collection.createIndex({ location: '2dsphere' })
  await Emergency.collection.createIndex({ userId: 1, status: 1 })
  await Emergency.collection.createIndex({ createdAt: -1 })
  await Emergency.collection.createIndex({ status: 1, createdAt: -1 })

  // SafetyReport indexes
  await SafetyReport.collection.createIndex({ location: '2dsphere' })
  await SafetyReport.collection.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 })
  await SafetyReport.collection.createIndex({ status: 1, createdAt: -1 })

  // Message indexes
  await Message.collection.createIndex({ emergencyId: 1, createdAt: -1 })
  await Message.collection.createIndex({ senderId: 1, createdAt: -1 })

  console.log('Database indexes ensured')
}
```

### Scaling Considerations
```javascript
// server/plugins/redis.js (Future scaling)
export default defineNitroPlugin(async () => {
  // Redis setup for socket.io adapter and caching
  // Uncomment when scaling to multiple servers

  // const redis = require('redis')
  // const client = redis.createClient({
  //   url: process.env.REDIS_URL
  // })
  //
  // await client.connect()
  //
  // // Store redis client in context for socket.io adapter
  // process.redisClient = client
})

// Socket.io Redis Adapter (Future)
// server/plugins/socket-redis.js
import { Server } from 'socket.io'
import { createAdapter } from '@socket.io/redis-adapter'

export default defineNitroPlugin((nitroApp) => {
  const io = new Server(nitroApp.h3App.stack, {
    adapter: createAdapter(process.redisClient.duplicate(), process.redisClient.duplicate()),
    // ... other config
  })

  nitroApp.io = io
})
```

### Production Deployment Checklist
```javascript
// server/middleware/production.js
export default defineEventHandler(async (event) => {
  // Add security headers
  setHeader(event, 'X-Frame-Options', 'DENY')
  setHeader(event, 'X-Content-Type-Options', 'nosniff')
  setHeader(event, 'Referrer-Policy', 'strict-origin-when-cross-origin')
  setHeader(event, 'Permissions-Policy', 'camera=(), microphone=(), geolocation=(self)')

  // Rate limiting
  await rateLimitCheck(event)

  // Logging
  if (process.env.NODE_ENV === 'production') {
    console.log(`${new Date().toISOString()} ${event.method} ${event.path}`)
  }
})

// server/utils/rate-limiting.js
const rateLimitStore = new Map()

export const rateLimitCheck = (event) => {
  const clientIP = getClientIP(event)
  const key = `rate_limit:${clientIP}`
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 100 // Max 100 requests per 15 minutes

  const requests = rateLimitStore.get(key) || []
  const recentRequests = requests.filter(time => now - time < windowMs)

  if (recentRequests.length >= maxRequests) {
    throw createError({
      statusCode: 429,
      message: 'Too many requests. Please try again later.'
    })
  }

  recentRequests.push(now)
  rateLimitStore.set(key, recentRequests)
}
```

### Monitoring & Analytics
```javascript
// server/utils/analytics.js
export const trackEmergencyMetrics = async (emergency) => {
  // Track response times
  const responseTime = Date.now() - new Date(emergency.createdAt).getTime()

  // Send to analytics service
  await fetch(process.env.ANALYTICS_WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      event: 'emergency_triggered',
      data: {
        emergencyId: emergency._id,
        responseTime,
        location: emergency.location,
        type: emergency.type,
        timestamp: new Date().toISOString()
      }
    })
  })
}

// Vercel Analytics integration (built-in)
// Add this to nuxt.config.js modules:
// modules: ['@nuxtjs/vercel-analytics']
```

---

## Conclusion

The SafeRoute emergency response platform is designed with scalability, reliability, and Nigerian context in mind. The architecture leverages modern web technologies while ensuring optimal performance in low-bandwidth scenarios.

### Key Architectural Decisions:

1. **Nuxt 4 Fullstack**: Unified frontend/backend for optimal developer experience and deployment simplicity
2. **MongoDB with Geospatial Indexing**: Efficient location-based queries for emergency proximity detection
3. **Dual Payment Gateways**: Paystack for local transactions, Stripe for international donations
4. **Multi-Channel Notifications**: SMS, WhatsApp, Email, and Web Push for reliable emergency communication
5. **Service Worker Caching**: Offline capabilities for critical emergency features
6. **Socket.io with Redis Adapter**: Real-time communication ready for horizontal scaling

### Next Implementation Steps:

1. Set up MongoDB Atlas with proper indexes
2. Configure Vercel deployment with environment variables
3. Integrate Termii for SMS/WhatsApp services
4. Set up Paystack and Stripe payment processing
5. Implement Google Maps with offline caching
6. Deploy and test emergency response flow

The architecture is production-ready and designed to handle the specific challenges of emergency response in Nigeria while maintaining scalability for future expansion.

**Document Version**: 1.1
**Last Updated**: December 1, 2024
**Author**: Chris, Fullstack Developer
**Project**: SafeRoute Emergency Response Platform