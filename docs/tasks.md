# SafeRoute Development Tasks

## Development Workflow
**Phase 1**: UI Component → **Phase 2**: Backend Implementation → **Phase 3**: Next Feature

Each feature will be built completely (UI + Backend) before moving to the next feature.

---

## Phase 1: Authentication System

### 1.1 User Registration UI
- [ ] Create registration page (`app/pages/auth/register.vue`)
- [ ] Build registration form with:
  - Name, Email, Phone, Password fields
  - Terms & Conditions checkbox
  - Form validation
  - Loading states and error handling
- [ ] Style with Tailwind CSS using SafeRoute colors (#002455, #FF3838)
- [ ] Mobile responsive design

### 1.2 User Registration Backend
- [ ] Create User model (`server/models/User.js`)
- [ ] Implement password hashing with bcrypt
- [ ] Create registration API endpoint (`server/api/auth/register.post.js`)
- [ ] Add input validation with Zod
- [ ] Generate and send OTP via email (Resend)
- [ ] Store user with unverified status
- [ ] Error handling and rate limiting

### 1.3 Login UI
- [ ] Create login page (`app/pages/auth/login.vue`)
- [ ] Build login form with:
  - Email and Password fields
  - Remember me checkbox
  - Forgot password link
  - Form validation
- [ ] Loading states and error messages
- [ ] Redirect logic after successful login

### 1.4 Login Backend
- [ ] Create login API endpoint (`server/api/auth/login.post.js`)
- [ ] Verify credentials and generate OTP
- [ ] Send OTP email notification
- [ ] Return requiresOTP flag with userId
- [ ] Implement rate limiting for login attempts

### 1.5 OTP Verification UI
- [ ] Create OTP verification page (`app/pages/auth/verify-otp.vue`)
- [ ] Build OTP input component (4-6 digits)
- [ ] Auto-focus and paste support
- [ ] Resend OTP functionality
- [ ] Countdown timer for OTP expiration
- [ ] Loading and error states

### 1.6 OTP Verification Backend
- [ ] Create OTP verification endpoint (`server/api/auth/verify-otp.post.js`)
- [ ] Validate OTP and expiration
- [ ] Generate JWT token
- [ ] Set HTTP-only authentication cookie
- [ ] Return user data for frontend state
- [ ] Clean up OTP after verification

### 1.7 Authentication State Management
- [ ] Create `useAuth` composable (`app/composables/useAuth.js`)
- [ ] Build authentication middleware (`app/middleware/auth.js`)
- [ ] Create guest middleware (`app/middleware/guest.js`)
- [ ] Set up auth store with Pinia (`app/stores/auth.js`)
- [ ] Implement auto-login from cookies
- [ ] Handle logout functionality

---

## Phase 2: User Profile Setup

### 2.1 Profile UI
- [ ] Create profile page (`app/pages/profile/index.vue`)
- [ ] Build profile form with:
  - Name, Email, Phone display (read-only)
  - Bio/About section
  - Profile picture upload
  - Save/Cancel buttons
- [ ] Create avatar upload component (`app/components/profile/ProfileAvatar.vue`)
- [ ] Image preview and cropping functionality

### 2.2 Profile Backend
- [ ] Create profile update endpoint (`server/api/user/profile.put.js`)
- [ ] Implement avatar upload endpoint (`server/api/user/avatar.post.js`)
- [ ] Base64 image storage in MongoDB
- [ ] File validation (size, type)
- [ ] Update user profile in database

### 2.3 Medical Information UI
- [ ] Create medical info page (`app/pages/profile/medical.vue`)
- [ ] Build medical form with:
  - Blood type selector
  - Allergies input (multi-select)
  - Medications input
  - Medical conditions
  - Doctor contact
- [ ] Emergency medical info display

### 2.4 Medical Information Backend
- [ ] Create medical info update endpoint (`server/api/user/medical-info.put.js`)
- [ ] Update User model with medical info schema
- [ ] Validate medical data
- [ ] Store medical information securely

### 2.5 Emergency Contacts UI
- [ ] Create emergency contacts page (`app/pages/profile/emergency-contacts.vue`)
- [ ] Build contact list component
- [ ] Add contact form with:
  - Name, Phone, Email fields
  - Relationship selector
  - WhatsApp toggle
  - Priority selector
- [ ] Edit and delete contact functionality

### 2.6 Emergency Contacts Backend
- [ ] Create EmergencyContact model (`server/models/EmergencyContact.js`)
- [ ] Implement CRUD endpoints for emergency contacts
  - GET: `server/api/user/emergency-contacts.get.js`
  - POST: `server/api/user/emergency-contacts.post.js`
  - DELETE: `server/api/user/emergency-contacts/[id].delete.js`
- [ ] Contact validation and user association

### 2.7 Vehicle Information UI
- [ ] Create vehicle info page (`app/pages/profile/vehicle.vue`)
- [ ] Build vehicle form with:
  - Make, Model, Year fields
  - Color selector
  - License plate number
- [ ] Optional vehicle info with skip option

### 2.8 Vehicle Information Backend
- [ ] Create vehicle info update endpoint (`server/api/user/vehicle-info.put.js`)
- [ ] Update User model with vehicle info schema
- [ ] Validate vehicle data

---

## Phase 3: Location & Maps

### 3.1 Geolocation Composable
- [ ] Create `useGeolocation` composable (`app/composables/useGeolocation.js`)
- [ ] Implement high-precision GPS tracking
- [ ] Handle permissions and errors
- [ ] Location watching functionality
- [ ] Distance calculation utilities

### 3.2 Google Maps Integration
- [ ] Set up Google Maps plugin (`app/plugins/google-maps.client.js`)
- [ ] Create `useMap` composable (`app/composables/useMap.js`)
- [ ] Map initialization and configuration
- [ ] Custom map styles for SafeRoute theme
- [ ] Marker management system

### 3.3 Location UI
- [ ] Create location permission component
- [ ] Location status indicator
- [ ] Current location display
- [ ] Location accuracy indicator
- [ ] Enable/disable location sharing toggle

### 3.4 Location Backend
- [ ] Create location update endpoint (`server/api/location/update.post.js`)
- [ ] Store user location in User model
- [ ] Implement geospatial indexing
- [ ] Location history tracking
- [ ] Privacy controls for location sharing

---

## Phase 4: Emergency System Core

### 4.1 Panic Button UI
- [ ] Create PanicButton component (`app/components/emergency/PanicButton.vue`)
- [ ] Large, accessible panic button design
- [ ] Hold-to-activate safety mechanism
- [ ] Countdown timer before activation
- [ ] Haptic feedback (mobile)
- [ ] Emergency type selector popup

### 4.2 Panic Button Backend
- [ ] Create Emergency model (`server/models/Emergency.js`)
- [ ] Implement emergency activation endpoint (`server/api/emergency/activate.post.js`)
- [ ] Generate emergency ID and timestamp
- [ ] Store user location and emergency details
- [ ] Set user status to inPanic mode

### 4.3 Emergency Alert Card UI
- [ ] Create EmergencyAlertCard component (`app/components/emergency/EmergencyAlertCard.vue`)
- [ ] Display emergency information:
  - User name and avatar
  - Emergency type and description
  - Distance from current location
  - Time since alert
  - Accept/Ignore buttons
- [ ] Color-coded severity indicators

### 4.4 Nearby Alerts Backend
- [ ] Create nearby alerts endpoint (`server/api/emergency/nearby.get.js`)
- [ ] Implement geospatial query (50km radius)
- [ ] Filter active emergencies only
- [ ] Calculate distances for each alert
- [ ] Pagination for performance

### 4.5 Emergency Details UI
- [ ] Create emergency details page (`app/pages/emergency/active.vue`)
- [ ] Live map with emergency location
- [ ] Emergency information panel
- [ ] Real-time status updates
- [ ] Emergency actions (cancel, update)
- [ ] Emergency timeline

### 4.6 Emergency Details Backend
- [ ] Create emergency details endpoint (`server/api/emergency/[id].get.js`)
- [ ] Real-time emergency status updates
- [ ] Emergency location history
- [ ] Responder information
- [ ] Emergency resolution workflow

---

## Phase 5: Real-time Communication

### 5.1 Socket.io Client Setup
- [ ] Create socket client plugin (`app/plugins/socket.client.js`)
- [ ] Authentication middleware for sockets
- [ ] Connection management and error handling
- [ ] Auto-reconnection logic
- [ ] Socket state management

### 5.2 Socket.io Server Setup
- [ ] Create socket server plugin (`server/plugins/socket.js`)
- [ ] Authentication middleware for socket connections
- [ ] Room management (user rooms, emergency rooms)
- [ ] Error handling and logging

### 5.3 Emergency Socket Events
- [ ] Emergency activation broadcast
- [ ] Emergency acceptance notifications
- [ ] Real-time location sharing
- [ ] Emergency status updates
- [ ] Emergency cancellation broadcast

### 5.4 Location Socket Events
- [ ] Real-time location updates
- [ ] Responder location tracking
- [ ] Location accuracy updates
- [ -] Location sharing controls

---

## Phase 6: Responder System

### 6.1 Responder Card UI
- [ ] Create ResponderCard component (`app/components/responder/ResponderCard.vue`)
- [ ] Display responder information:
  - Name and photo
  - Distance and ETA
  - Verification status
  - Response rating
  - Contact options

### 6.2 Responder List UI
- [ ] Create ResponderList component (`app/components/responder/ResponderList.vue`)
- [ ] Filter and sort responders
- [ ] Real-time updates
- [ ] Empty state handling

### 6.3 Responder Acceptance UI
- [ ] Create AcceptAlertButton component (`app/components/responder/AcceptAlertButton.vue`)
- [ ] Accept/Decline emergency alerts
- [ ] Confirmation dialog
- [ ] Status updates

### 6.4 Responder Backend
- [ ] Create responder acceptance endpoint (`server/api/emergency/accept.post.js`)
- [ ] Update emergency with responder info
- [ ] Calculate ETA and distance
- [ ] Notify emergency user
- [ ] Update responder statistics

### 6.5 Responder Tracking UI
- [ ] Create ResponderTracking component (`app/components/responder/ResponderTracking.vue`)
- [ ] Real-time responder location on map
- [ -] ETA updates
- [ ] Communication options

---

## Phase 7: Chat System

### 7.1 Chat Window UI
- [ ] Create ChatWindow component (`app/components/chat/ChatWindow.vue`)
- [ ] Message list with scroll
- [ ] Auto-scroll to latest messages
- [ ] Read receipts
- [ ] Online status indicators

### 7.2 Chat Message UI
- [ ] Create ChatMessage component (`app/components/chat/ChatMessage.vue`)
- [ ] Message bubble styling
- [ ] Timestamp display
- [ ] Media message support
- [ ] Message status indicators

### 7.3 Chat Input UI
- [ ] Create ChatInput component (`app/components/chat/ChatInput.vue`)
- [ ] Text input with send button
- [ ] Media attachment support
- [ ] Location sharing button
- [ ] Character limit indicator

### 7.4 Chat Backend
- [ ] Create Message model (`server/models/Message.js`)
- [ ] Chat message endpoints:
  - GET: `server/api/chat/messages.get.js`
  - POST: `server/api/chat/send.post.js`
- [ ] Socket events for real-time chat
- [ ] Message history and pagination

---

## Phase 8: Safety Features

### 8.1 Safety Reports UI
- [ ] Create safety report page (`app/pages/safety/reports.vue`)
- [ ] Report danger form with:
  - Location picker
  - Incident type selector
  - Description field
  - Severity rating
- [ ] Reports list with filters
- [ ] Upvote/downvote system

### 8.2 Safety Reports Backend
- [ ] Create SafetyReport model (`server/models/SafetyReport.js`)
- [ ] Safety report endpoints:
  - GET: `server/api/safety/reports.get.js`
  - POST: `server/api/safety/report-danger.post.js`
  - POST: `server/api/safety/upvote-report.post.js`
- [ ] Report expiration system (7 days)
- [ ] Geospatial queries for nearby reports

### 8.3 Route Safety UI
- [ ] Create route safety page (`app/pages/safety/routes.vue`)
- [ ] Route safety rating form
- [ ] Safety heatmap display
- [ -] Route comparison tools

### 8.4 Route Safety Backend
- [ ] Create RouteRating model (`server/models/RouteRating.js`)
- [ ] Route rating endpoints:
  - GET: `server/api/safety/routes.get.js`
  - POST: `server/api/safety/routes.post.js`
- [ ] Safety data aggregation
- [ ] Heatmap data generation

### 8.5 Safety Map UI
- [ ] Create SafetyMap component (`app/components/safety/SafetyMap.vue`)
- [ ] Heatmap overlay on map
- [ ] Safety report markers
- [ ] Interactive safety layers
- [ ] Time-based filtering

---

## Phase 9: Notification System

### 9.1 Push Notifications UI
- [ ] Create notification permission component
- [ ] Notification settings page
- [ ] Push notification controls
- [ ] Test notification functionality

### 9.2 Push Notifications Backend
- [ ] Web Push API setup
- [ ] VAPID key generation
- [ ] Notification subscription endpoint (`server/api/notifications/subscribe.post.js`)
- [ ] Push notification sending utilities

### 9.3 Notification Service UI
- [ ] Create notification center component
- [ ] Notification list with read/unread states
- [ ] Notification filtering and search
- [ ] Notification actions

### 9.4 Notification Service Backend
- [ ] Multi-channel notification service (`server/services/notification.service.js`)
- [ ] Email notifications (Resend)
- [ ] SMS notifications (Termii)
- [ ] WhatsApp notifications (Termii)
- [ ] Notification templates

---

## Phase 10: Payment System

### 10.1 Donation UI
- [ ] Create donation page (`app/pages/donate.vue`)
- [ ] Donation form with:
  - Amount selector
  - Currency choice (NGN/USD)
  - Recurring donation options
  - Payment method selector
- [ ] Donation history display

### 10.2 Payment Gateway UI
- [ ] Payment method selection
- [ ] Paystack payment integration
- [ ] Stripe payment integration
- [ ] Payment confirmation page
- [ ] Payment failure handling

### 10.3 Payment Backend
- [ ] Create Donation model (`server/models/Donation.js`)
- [ ] Payment processing utilities (`server/utils/payment.js`)
- [ ] Paystack integration (`server/utils/paystack.js`)
- [ ] Stripe integration (`server/utils/stripe.js`)
- [ ] Donation creation endpoint (`server/api/donation/create.post.js`)

### 10.4 Webhook Handling
- [ ] Paystack webhook handler (`server/api/webhooks/paystack.post.js`)
- [ ] Stripe webhook handler (`server/api/webhooks/stripe.post.js`)
- [ ] Webhook signature verification
- [ ] Donation status updates

---

## Phase 11: Offline Support & PWA

### 11.1 Service Worker
- [ ] Create service worker (`public/sw.js`)
- [ ] Cache critical emergency data
- [ ] Offline fallback pages
- [ ] Map tiles caching strategy
- [ -] Background sync for emergencies

### 11.2 PWA Configuration
- [ ] PWA manifest configuration
- [ ] App icons and splash screens
- [ ] Install prompt handling
- [ ] App lifecycle management

### 11.3 Offline Emergency Mode
- [ ] Offline emergency trigger
- [ ] Local emergency storage
- [ ] Sync when back online
- [ ] Offline notification queue

---

## Phase 12: Testing & Deployment

### 12.1 Testing
- [ ] Unit tests for critical functions
- [ ] Integration tests for API endpoints
- [ ] End-to-end tests for emergency flow
- [ ] Performance testing
- [ ] Security testing

### 12.2 Deployment Setup
- [ ] Environment variable configuration
- [ ] Vercel deployment setup
- [ ] MongoDB Atlas configuration
- [ ] Domain and SSL setup
- [ ] Monitoring and logging

### 12.3 Production Optimization
- [ ] Bundle optimization
- [ ] Image optimization
- [ ] Caching strategies
- [ ] SEO optimization
- [ ] Accessibility improvements

---

## Task Priority Order

1. **Phase 1** - Authentication (Critical Foundation)
2. **Phase 2** - User Profile Setup (Required for emergencies)
3. **Phase 3** - Location & Maps (Core functionality)
4. **Phase 4** - Emergency System Core (Main feature)
5. **Phase 5** - Real-time Communication (Essential for live coordination)
6. **Phase 6** - Responder System (Community response)
7. **Phase 7** - Chat System (Communication during emergencies)
8. **Phase 8** - Safety Features (Prevention and awareness)
9. **Phase 9** - Notification System (Alert delivery)
10. **Phase 10** - Payment System (Sustainability)
11. **Phase 11** - Offline Support & PWA (Reliability)
12. **Phase 12** - Testing & Deployment (Launch preparation)

## Development Notes

- Each task should be completed in order
- UI must be built and functional before backend implementation
- Backend should immediately follow UI completion for each feature
- Test each feature thoroughly before moving to the next phase
- Keep user experience and accessibility in mind throughout development
- Follow the established color scheme and design patterns
- Ensure mobile-first responsive design for all components

**Total Estimated Development Time**: 8-12 weeks
**Current Status**: Ready to begin Phase 1 - Authentication System