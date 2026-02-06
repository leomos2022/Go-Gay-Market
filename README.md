# 🏳️‍🌈 Parche Queer

**Plataforma Social y Marketplace LGBTQ+ para Colombia**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React Native](https://img.shields.io/badge/React%20Native-20232A?logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=white)](https://nestjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white)](https://www.postgresql.org/)

---

## 📖 Descripción

**Parche Queer** es una plataforma social y marketplace diseñada para empoderar económicamente a la comunidad LGBTQ+ en Colombia, conectando vendedores queer (artistas, diseñadores, tatuadores, músicos) con compradores en un espacio seguro e inclusivo.

### Características principales:
- 🛍️ **Marketplace** con pasarelas de pago colombianas
- 💬 **Chat en tiempo real** estilo Discord
- 🤖 **IA integrada** para recomendaciones y moderación
- 📅 **Eventos comunitarios** geolocalizados
- 🌈 **Red social** para conexión comunitaria
- 🔒 **Espacios seguros** verificados

---

## 🛠️ Stack Tecnológico

### Frontend
- **React Native** + **Expo** (iOS + Android)
- **React** + **Next.js** (Web)
- **TypeScript**
- **React Navigation** (navegación)
- **React Query** (manejo de estado servidor)
- **Zustand** (estado global)
- **Expo Notifications** (push notifications)

### Backend
- **NestJS** + **TypeScript** (API principal)
- **FastAPI** + **Python** (microservicio IA)
- **PostgreSQL** (base de datos principal)
- **MongoDB** (chats y mensajes)
- **Redis** (cache y sesiones)
- **Socket.io** (WebSockets para chat en tiempo real)

### Inteligencia Artificial
- **OpenAI GPT-4.1** (chatbot, moderación)
- **Pinecone** (embeddings y búsqueda vectorial)
- **LangChain** (orquestación IA)
- **TensorFlow** (clasificación de contenido)

### Pagos (Colombia)
- **Wompi by Bancolombia** (PSE, tarjetas, Nequi)
- **MercadoPago** (alternativa + internacional)
- **PayU Latam** (empresarial)

### Infraestructura
- **AWS EC2** (backend)
- **AWS S3** (almacenamiento de archivos)
- **AWS RDS** (PostgreSQL)
- **AWS ElastiCache** (Redis)
- **Docker** + **Kubernetes**
- **GitHub Actions** (CI/CD)

---

## 🏗️ Arquitectura del Sistema

```
┌─────────────────────────────────────────────────┐
│          CLIENTES (Frontend)                    │
│  ┌──────────────┐  ┌──────────────┐  ┌────────┐│
│  │ React Native │  │ React Native │  │  Web   ││
│  │   (iOS)      │  │  (Android)   │  │(Next.js)│
│  └──────────────┘  └──────────────┘  └────────┘│
└─────────────┬───────────────────────────────────┘
              │
        API Gateway / Load Balancer
              │
┌─────────────┴───────────────────────────────────┐
│           BACKEND (Microservicios)              │
│  ┌─────────────────────────────────────────┐   │
│  │    NestJS API (TypeScript)              │   │
│  │  ┌──────────────────────────────────┐   │   │
│  │  │ - Auth Service                   │   │   │
│  │  │ - Users Service                  │   │   │
│  │  │ - Products Service               │   │   │
│  │  │ - Orders Service                 │   │   │
│  │  │ - Events Service                 │   │   │
│  │  │ - Payments Service               │   │   │
│  │  │ - Jobs Service                   │   │   │
│  │  └──────────────────────────────────┘   │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  ┌─────────────────────────────────────────┐   │
│  │    Chat Service (Socket.io)            │   │
│  │  - Real-time messaging                 │   │
│  │  - Channels & DMs                      │   │
│  │  - Moderation                          │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  ┌─────────────────────────────────────────┐   │
│  │    AI Service (FastAPI - Python)       │   │
│  │  - Chatbot (GPT-4.1)                   │   │
│  │  - Recommendations                     │   │
│  │  - Content Moderation                  │   │
│  │  - Embeddings (Pinecone)               │   │
│  └─────────────────────────────────────────┘   │
└─────────────┬───────────────────────────────────┘
              │
    ┌─────────┴─────────┐
    │                   │
┌───▼────┐  ┌───▼────┐  ┌──────────┐  ┌────────┐
│PostgreSQL MongoDB  │  │  Redis   │  │   S3   │
│  (Core) │ (Chat)  │  │ (Cache)  │  │(Media) │
└─────────┘ └────────┘  └──────────┘  └────────┘

┌─────────────────────────────────────────────────┐
│         SERVICIOS EXTERNOS                      │
│  - Wompi / MercadoPago (Pagos)                 │
│  - OpenAI (IA)                                  │
│  - Pinecone (Vectores)                          │
│  - Expo Push Notifications                      │
│  - AWS CloudFront (CDN)                         │
└─────────────────────────────────────────────────┘
```

---

## 📁 Estructura del Proyecto

```
parche-queer/
├── apps/
│   ├── mobile/                    # React Native + Expo
│   │   ├── src/
│   │   │   ├── screens/          # Pantallas
│   │   │   ├── components/       # Componentes reutilizables
│   │   │   ├── navigation/       # React Navigation
│   │   │   ├── services/         # API calls
│   │   │   ├── hooks/            # Custom hooks
│   │   │   ├── store/            # Zustand state
│   │   │   └── utils/
│   │   ├── app.json
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── web/                       # Next.js (Web)
│   │   ├── src/
│   │   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── lib/
│   │   │   └── styles/
│   │   ├── public/
│   │   ├── next.config.js
│   │   └── package.json
│   │
│   ├── backend/                   # NestJS API
│   │   ├── src/
│   │   │   ├── auth/             # Autenticación
│   │   │   ├── users/            # Usuarios
│   │   │   ├── products/         # Productos
│   │   │   ├── orders/           # Órdenes
│   │   │   ├── payments/         # Pagos (Wompi/MercadoPago)
│   │   │   ├── events/           # Eventos comunitarios
│   │   │   ├── jobs/             # Empleos
│   │   │   ├── chat/             # WebSocket Gateway
│   │   │   ├── common/           # Guards, filters, pipes
│   │   │   ├── database/         # TypeORM/Prisma
│   │   │   └── main.ts
│   │   ├── test/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── nest-cli.json
│   │
│   ├── ai-service/               # FastAPI (IA)
│   │   ├── app/
│   │   │   ├── routers/
│   │   │   │   ├── chatbot.py   # GPT-4.1 chatbot
│   │   │   │   ├── recommendations.py
│   │   │   │   ├── moderation.py
│   │   │   │   └── embeddings.py
│   │   │   ├── models/
│   │   │   ├── services/
│   │   │   └── main.py
│   │   ├── requirements.txt
│   │   └── Dockerfile
│   │
│   └── admin-panel/              # Panel Admin (React)
│       ├── src/
│       ├── package.json
│       └── vite.config.ts
│
├── packages/                     # Código compartido
│   ├── shared-types/            # TypeScript types
│   └── ui-components/           # Componentes UI comunes
│
├── infrastructure/              # DevOps
│   ├── docker/
│   │   ├── docker-compose.yml
│   │   ├── Dockerfile.backend
│   │   ├── Dockerfile.ai
│   │   └── nginx.conf
│   ├── kubernetes/
│   │   ├── deployments/
│   │   ├── services/
│   │   └── ingress.yaml
│   └── terraform/               # IaC para AWS
│
├── scripts/                     # Scripts útiles
│   ├── setup-dev.sh
│   ├── deploy.sh
│   └── db-migrate.sh
│
├── docs/                        # Documentación
│   ├── api/                     # API docs (Swagger)
│   ├── architecture/
│   ├── guides/
│   └── deployment/
│
├── .github/
│   └── workflows/
│       ├── ci-backend.yml
│       ├── ci-mobile.yml
│       └── cd-production.yml
│
├── README.md
├── .gitignore
└── package.json                # Monorepo config
```

---

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+
- Python 3.11+
- Docker & Docker Compose
- PostgreSQL 15+
- MongoDB 6+
- Redis 7+
- Expo CLI

### 1. Clonar repositorio
```bash
git clone https://github.com/tu-usuario/parche-queer.git
cd parche-queer
```

### 2. Configurar variables de entorno

**Backend (.env):**
```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/parche_queer
MONGODB_URI=mongodb://localhost:27017/parche_queer_chat
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=tu_secret_super_seguro
JWT_EXPIRES_IN=7d

# AWS
AWS_ACCESS_KEY_ID=tu_access_key
AWS_SECRET_ACCESS_KEY=tu_secret_key
AWS_S3_BUCKET=parche-queer-media

# Pagos
WOMPI_PUBLIC_KEY=pub_test_xxxxx
WOMPI_PRIVATE_KEY=prv_test_xxxxx
WOMPI_EVENTS_SECRET=xxxxx

MERCADOPAGO_ACCESS_TOKEN=TEST-xxxxx

# IA
OPENAI_API_KEY=sk-xxxxx
PINECONE_API_KEY=xxxxx
PINECONE_ENVIRONMENT=us-west1-gcp

# Notificaciones
EXPO_PUSH_TOKEN=ExponentPushToken[xxxxx]
```

### 3. Instalar dependencias

**Backend (NestJS):**
```bash
cd apps/backend
npm install
```

**Mobile (React Native):**
```bash
cd apps/mobile
npm install
```

**AI Service (FastAPI):**
```bash
cd apps/ai-service
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 4. Iniciar bases de datos con Docker
```bash
cd infrastructure/docker
docker-compose up -d postgres mongodb redis
```

### 5. Ejecutar migraciones
```bash
cd apps/backend
npm run migration:run
```

### 6. Iniciar servicios

**Backend:**
```bash
cd apps/backend
npm run start:dev
# API disponible en http://localhost:3000
# Swagger docs en http://localhost:3000/api
```

**AI Service:**
```bash
cd apps/ai-service
uvicorn app.main:app --reload
# API disponible en http://localhost:8000
# Docs en http://localhost:8000/docs
```

**Mobile:**
```bash
cd apps/mobile
npx expo start
# Escanear QR con Expo Go
```

**Web:**
```bash
cd apps/web
npm run dev
# Web disponible en http://localhost:3001
```

---

## 📱 Pantallas Principales (Mobile)

### 1. **Onboarding & Auth**
- Splash con logo Parche Queer
- Login / Registro
- Selección de pronombres
- Completar perfil

### 2. **Feed Principal**
- Productos destacados
- Categorías (Arte, Moda, Música, etc.)
- Stories de vendedores
- Búsqueda con filtros

### 3. **Marketplace**
- Lista de productos con grid
- Filtros avanzados (precio, ubicación, categoría)
- Detalle de producto
- Galería de imágenes
- Reseñas y calificaciones
- Botón "Comprar ahora" / "Agregar al carrito"

### 4. **Perfil de Vendedor**
- Banner + foto de perfil
- Bio y descripción
- Catálogo de productos
- Reseñas
- Botón "Seguir" / "Contactar"
- Estadísticas (ventas, seguidores)

### 5. **Chat (estilo Discord)**
- Lista de conversaciones
- Chat 1:1 (comprador-vendedor)
- Canales comunitarios:
  - #general
  - #arte-y-diseño
  - #eventos
  - #ayuda
  - #off-topic
- Mensajes con imágenes
- Reacciones con emojis
- Mensajes fijados

### 6. **Carrito y Checkout**
- Resumen de productos
- Cálculo de envío
- Métodos de pago:
  - PSE (Wompi)
  - Tarjeta de crédito/débito
  - Nequi
  - MercadoPago
- Confirmación de compra

### 7. **Eventos**
- Calendario de eventos LGBT+
- Filtro por ciudad (Bogotá, Medellín, Cali)
- Detalle de evento
- Botón "Asistiré" / "Compartir"
- Mapa con ubicación

### 8. **Empleos**
- Bolsa de trabajo inclusiva
- Filtros por área, tipo de contrato
- Detalle de oferta
- Botón "Aplicar"

### 9. **Recursos**
- Seguridad comunitaria
- Salud sexual
- Líneas de apoyo
- Espacios seguros (mapa)

### 10. **Perfil de Usuario**
- Información personal
- Historial de compras
- Favoritos
- Configuración
- Cerrar sesión

---

## 🧠 Funcionalidades IA

### 1. **Chatbot Comunitario** (`/ai/chatbot`)
```python
# FastAPI endpoint
@router.post("/chat")
async def chat_with_bot(message: str, user_id: str):
    response = openai.ChatCompletion.create(
        model="gpt-4.1",
        messages=[
            {"role": "system", "content": "Eres un asistente de la comunidad LGBT+ en Colombia..."},
            {"role": "user", "content": message}
        ]
    )
    return {"response": response.choices[0].message.content}
```

**Casos de uso:**
- Responder preguntas frecuentes
- Guiar a vendedores en onboarding
- Información sobre eventos
- Recursos de apoyo

### 2. **Recomendaciones Personalizadas** (`/ai/recommendations`)
- Productos basados en historial de compras
- Vendedores similares a los que sigues
- Eventos cerca de ti
- Empleos relevantes

**Tecnología:**
- Embeddings de OpenAI
- Búsqueda vectorial con Pinecone
- Filtrado colaborativo

### 3. **Moderación Automática** (`/ai/moderate`)
```python
@router.post("/moderate")
async def moderate_content(text: str, image_url: Optional[str] = None):
    # Moderar texto
    text_result = openai.Moderation.create(input=text)
    
    # Moderar imagen (si existe)
    if image_url:
        vision_result = google_vision.safe_search_detection(image_url)
    
    return {
        "is_safe": not text_result.flagged,
        "categories": text_result.categories
    }
```

**Aplica en:**
- Comentarios y reseñas
- Mensajes en chat
- Descripciones de productos
- Publicaciones

### 4. **Auto-tagging de Productos** (`/ai/tag-product`)
- Analizar imagen del producto
- Generar tags automáticos
- Sugerir categoría
- Mejorar descripción

---

## 💳 Integración de Pagos

### Wompi by Bancolombia (Recomendado)

**Flujo de pago:**
```typescript
// apps/backend/src/payments/wompi.service.ts
import axios from 'axios';

export class WompiService {
  async createTransaction(orderData: CreateOrderDto) {
    const response = await axios.post(
      'https://production.wompi.co/v1/transactions',
      {
        amount_in_cents: orderData.total * 100,
        currency: 'COP',
        customer_email: orderData.buyer_email,
        payment_method: {
          type: 'PSE',
          user_type: '0', // Natural
          user_legal_id: orderData.buyer_id,
          user_legal_id_type: 'CC',
          financial_institution_code: orderData.bank_code
        },
        reference: `ORDER-${orderData.id}`,
        redirect_url: `${process.env.APP_URL}/orders/${orderData.id}/success`
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.WOMPI_PRIVATE_KEY}`
        }
      }
    );
    
    return response.data;
  }
  
  async verifyTransaction(transactionId: string) {
    const response = await axios.get(
      `https://production.wompi.co/v1/transactions/${transactionId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.WOMPI_PUBLIC_KEY}`
        }
      }
    );
    
    return response.data;
  }
}
```

**Métodos de pago soportados:**
- PSE (débito bancario)
- Tarjetas de crédito/débito
- Nequi (QR y link de pago)
- Bancolombia (botón de pago)

### MercadoPago (Alternativa)

```typescript
// apps/backend/src/payments/mercadopago.service.ts
import mercadopago from 'mercadopago';

mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN
});

export class MercadoPagoService {
  async createPreference(orderData: CreateOrderDto) {
    const preference = {
      items: orderData.items.map(item => ({
        title: item.name,
        unit_price: item.price,
        quantity: item.quantity
      })),
      payer: {
        email: orderData.buyer_email
      },
      back_urls: {
        success: `${process.env.APP_URL}/orders/${orderData.id}/success`,
        failure: `${process.env.APP_URL}/orders/${orderData.id}/failure`,
        pending: `${process.env.APP_URL}/orders/${orderData.id}/pending`
      },
      notification_url: `${process.env.API_URL}/webhooks/mercadopago`
    };
    
    const response = await mercadopago.preferences.create(preference);
    return response.body;
  }
}
```

---

## 💬 Chat en Tiempo Real

### Arquitectura del Chat

**Backend (NestJS Gateway):**
```typescript
// apps/backend/src/chat/chat.gateway.ts
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketServer
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: { origin: '*' }
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;
  
  @SubscribeMessage('join-channel')
  handleJoinChannel(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { channelId: string; userId: string }
  ) {
    client.join(`channel:${data.channelId}`);
    this.server.to(`channel:${data.channelId}`).emit('user-joined', {
      userId: data.userId
    });
  }
  
  @SubscribeMessage('send-message')
  async handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: {
      channelId: string;
      userId: string;
      content: string;
      type: 'text' | 'image';
    }
  ) {
    // Moderar con IA
    const isModerated = await this.aiService.moderateContent(data.content);
    
    if (!isModerated.is_safe) {
      client.emit('message-blocked', { reason: 'Contenido inapropiado' });
      return;
    }
    
    // Guardar en MongoDB
    const message = await this.chatService.createMessage(data);
    
    // Broadcast a todos en el canal
    this.server.to(`channel:${data.channelId}`).emit('new-message', message);
  }
  
  @SubscribeMessage('typing')
  handleTyping(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: { channelId: string; userId: string }
  ) {
    client.to(`channel:${data.channelId}`).emit('user-typing', {
      userId: data.userId
    });
  }
}
```

**Frontend (React Native):**
```typescript
// apps/mobile/src/services/socket.service.ts
import io from 'socket.io-client';

class SocketService {
  private socket: any;
  
  connect(token: string) {
    this.socket = io(process.env.API_URL, {
      auth: { token }
    });
    
    this.socket.on('connect', () => {
      console.log('Connected to chat server');
    });
  }
  
  joinChannel(channelId: string, userId: string) {
    this.socket.emit('join-channel', { channelId, userId });
  }
  
  sendMessage(channelId: string, content: string, userId: string) {
    this.socket.emit('send-message', {
      channelId,
      userId,
      content,
      type: 'text'
    });
  }
  
  onNewMessage(callback: (message: Message) => void) {
    this.socket.on('new-message', callback);
  }
  
  disconnect() {
    this.socket.disconnect();
  }
}

export default new SocketService();
```

### Canales Predefinidos
- **#general** - Conversación abierta
- **#arte-y-diseño** - Para artistas y diseñadores
- **#moda** - Moda y estilo
- **#eventos** - Eventos comunitarios
- **#empleos** - Oportunidades laborales
- **#ayuda** - Soporte y recursos
- **#off-topic** - Temas variados

---

## 🗄️ Modelo de Datos

### PostgreSQL (Core)

```sql
-- Usuarios
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  pronombres VARCHAR(50),
  foto_perfil VARCHAR(255),
  tipo VARCHAR(20) DEFAULT 'comprador', -- 'comprador', 'vendedor', 'admin'
  verificado BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Vendedores (perfil extendido)
CREATE TABLE sellers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  nombre_tienda VARCHAR(100) NOT NULL,
  bio TEXT,
  ubicacion VARCHAR(100),
  categorias TEXT[], -- Array de categorías
  calificacion DECIMAL(2,1) DEFAULT 0,
  total_ventas INTEGER DEFAULT 0,
  activo BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Productos
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  seller_id UUID REFERENCES sellers(id) ON DELETE CASCADE,
  nombre VARCHAR(200) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10, 2) NOT NULL,
  stock INTEGER DEFAULT 1,
  categoria VARCHAR(50) NOT NULL,
  tags TEXT[],
  imagenes TEXT[], -- URLs en S3
  destacado BOOLEAN DEFAULT false,
  activo BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Órdenes
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  buyer_id UUID REFERENCES users(id),
  seller_id UUID REFERENCES sellers(id),
  total DECIMAL(10, 2) NOT NULL,
  estado VARCHAR(20) DEFAULT 'pendiente', -- 'pendiente', 'pagado', 'enviado', 'completado', 'cancelado'
  metodo_pago VARCHAR(50), -- 'wompi_pse', 'wompi_card', 'mercadopago'
  transaccion_id VARCHAR(255),
  direccion_envio TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Ítems de orden
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  cantidad INTEGER NOT NULL,
  precio_unitario DECIMAL(10, 2) NOT NULL,
  subtotal DECIMAL(10, 2) NOT NULL
);

-- Eventos
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  titulo VARCHAR(200) NOT NULL,
  descripcion TEXT,
  fecha TIMESTAMP NOT NULL,
  ubicacion VARCHAR(200),
  ciudad VARCHAR(50),
  lat DECIMAL(10, 8),
  lng DECIMAL(11, 8),
  imagen VARCHAR(255),
  organizador_id UUID REFERENCES users(id),
  categoria VARCHAR(50), -- 'fiesta', 'cultural', 'activismo', 'networking'
  capacidad INTEGER,
  asistentes_count INTEGER DEFAULT 0,
  activo BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Empleos
CREATE TABLE jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  empresa VARCHAR(100) NOT NULL,
  titulo VARCHAR(200) NOT NULL,
  descripcion TEXT,
  tipo_contrato VARCHAR(50), -- 'tiempo_completo', 'medio_tiempo', 'freelance'
  ubicacion VARCHAR(100),
  remoto BOOLEAN DEFAULT false,
  salario_min DECIMAL(10, 2),
  salario_max DECIMAL(10, 2),
  categoria VARCHAR(50),
  logo_empresa VARCHAR(255),
  activo BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Reseñas
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id),
  seller_id UUID REFERENCES sellers(id),
  buyer_id UUID REFERENCES users(id),
  calificacion INTEGER CHECK (calificacion BETWEEN 1 AND 5),
  comentario TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### MongoDB (Chat)

```javascript
// Mensajes
{
  _id: ObjectId,
  channel_id: String,
  user_id: String,
  content: String,
  type: 'text' | 'image' | 'system',
  attachments: [String], // URLs
  reactions: [
    {
      user_id: String,
      emoji: String
    }
  ],
  is_pinned: Boolean,
  replied_to: ObjectId, // Referencia a mensaje padre
  created_at: Date,
  updated_at: Date
}

// Canales
{
  _id: ObjectId,
  name: String, // 'general', 'arte-y-diseño'
  description: String,
  type: 'public' | 'private',
  members: [String], // user_ids
  moderators: [String],
  created_at: Date
}
```

---

## 🧪 Testing

### Backend (NestJS)
```bash
# Tests unitarios
npm run test

# Tests e2e
npm run test:e2e

# Cobertura
npm run test:cov
```

### Mobile (React Native)
```bash
# Jest tests
npm test

# E2E con Detox
npm run test:e2e
```

### AI Service (FastAPI)
```bash
# Pytest
pytest

# Con cobertura
pytest --cov=app
```

---

## 🚀 Deployment

### Docker Compose (Desarrollo)
```bash
cd infrastructure/docker
docker-compose up -d
```

### Kubernetes (Producción)
```bash
# Aplicar configuraciones
kubectl apply -f infrastructure/kubernetes/

# Ver pods
kubectl get pods

# Logs
kubectl logs -f deployment/parche-queer-backend
```

### AWS (Producción)
1. **EC2** para backend
2. **RDS PostgreSQL** para base de datos
3. **S3** para imágenes
4. **CloudFront** para CDN
5. **Elastic Beanstalk** para deploy automático

---

## 📊 Monitoreo y Analytics

### Herramientas
- **Sentry** - Error tracking
- **DataDog** - APM y logs
- **Google Analytics** - Métricas de uso
- **Mixpanel** - Analytics de producto

### Métricas Clave (KPIs)
- Vendedores activos (con ventas último mes)
- GMV (Gross Merchandise Value)
- Transacciones completadas
- Retención de usuarios (30/60/90 días)
- NPS (Net Promoter Score)

---

## 🤝 Contribuir

Ver [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE)

---

## 📞 Contacto

- **Email**: hola@parche-queer.co
- **Instagram**: [@parche.queer](https://instagram.com/parche.queer)
- **Discord**: [Comunidad Parche Queer](https://discord.gg/parche-queer)

---

## 🌈 Agradecimientos

Este proyecto es posible gracias al apoyo de la comunidad LGBTQ+ en Colombia y organizaciones aliadas.

**Proyecto de Grado - Ingeniería de Software**  
Universidad: [Tu Universidad]  
Autor: [Tu Nombre]  
Año: 2024-2025

---

¡Gracias por ser parte de **Parche Queer**! 🏳️‍🌈 ✨
