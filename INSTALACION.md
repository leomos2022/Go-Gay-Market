# Parche Queer - Guía de Instalación y Desarrollo

## 📋 Prerrequisitos

### Software requerido:
- Node.js 18+ y npm 9+
- Python 3.11+
- Docker y Docker Compose
- PostgreSQL 15+ (o usar Docker)
- MongoDB 6+ (o usar Docker)
- Redis 7+ (o usar Docker)
- Git
- Expo CLI: `npm install -g expo-cli`

### Cuentas necesarias:
- [Expo Account](https://expo.dev) (para push notifications)
- [OpenAI API](https://platform.openai.com) (para IA)
- [Pinecone](https://www.pinecone.io) (para embeddings)
- [Wompi](https://wompi.co) (pagos Colombia)
- [MercadoPago](https://www.mercadopago.com.co) (pagos alternativos)
- [AWS Account](https://aws.amazon.com) (S3 para archivos)

---

## 🚀 Instalación Rápida

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/parche-queer.git
cd parche-queer
```

### 2. Configurar variables de entorno
```bash
cp .env.example .env
# Editar .env con tus credenciales reales
```

### 3. Instalar dependencias
```bash
# Raíz del proyecto (monorepo)
npm install

# Backend
cd apps/backend && npm install && cd ../..

# Mobile
cd apps/mobile && npm install && cd ../..

# Web
cd apps/web && npm install && cd ../..

# AI Service (Python)
cd apps/ai-service
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
cd ../..
```

### 4. Iniciar servicios con Docker
```bash
# Iniciar PostgreSQL, MongoDB y Redis
npm run docker:up

# Verificar que estén corriendo
docker ps
```

### 5. Ejecutar migraciones
```bash
npm run db:migrate
npm run db:seed  # Datos de prueba (opcional)
```

### 6. Iniciar servidores de desarrollo
```bash
# Terminal 1 - Backend (NestJS)
npm run dev:backend

# Terminal 2 - Mobile (Expo)
npm run dev:mobile

# Terminal 3 - Web (Next.js)
npm run dev:web

# Terminal 4 - AI Service (FastAPI)
npm run dev:ai
```

---

## 📱 Desarrollo Mobile (React Native + Expo)

### Iniciar en simulador iOS
```bash
cd apps/mobile
npm run ios
```

### Iniciar en emulador Android
```bash
cd apps/mobile
npm run android
```

### Escanear QR con Expo Go
```bash
cd apps/mobile
npm start
# Escanear QR con la app Expo Go en tu móvil
```

### Estructura del proyecto mobile
```
apps/mobile/
├── app/              # Expo Router (file-based routing)
│   ├── (tabs)/      # Navegación principal con tabs
│   ├── auth/        # Pantallas de autenticación
│   ├── marketplace/ # Pantallas de tienda
│   ├── chat/        # Pantallas de chat
│   └── profile/     # Pantallas de perfil
├── components/      # Componentes reutilizables
├── hooks/           # Custom hooks
├── services/        # API y WebSocket
├── store/           # Zustand state management
└── utils/           # Utilidades y helpers
```

---

## 🖥️ Desarrollo Backend (NestJS)

### Crear un nuevo módulo
```bash
cd apps/backend
nest generate module modules/ejemplo
nest generate controller modules/ejemplo
nest generate service modules/ejemplo
```

### Crear una migración
```bash
cd apps/backend
npm run migration:generate -- -n NombreMigracion
npm run migration:run
```

### Estructura del backend
```
apps/backend/
├── src/
│   ├── modules/
│   │   ├── auth/           # Autenticación JWT
│   │   ├── users/          # Gestión de usuarios
│   │   ├── products/       # Productos y marketplace
│   │   ├── orders/         # Órdenes y pagos
│   │   ├── payments/       # Wompi + MercadoPago
│   │   ├── chat/           # WebSocket Gateway
│   │   ├── events/         # Eventos comunitarios
│   │   └── jobs/           # Ofertas laborales
│   ├── common/
│   │   ├── decorators/     # Decoradores personalizados
│   │   ├── filters/        # Exception filters
│   │   ├── guards/         # Auth guards
│   │   └── interceptors/   # Response interceptors
│   ├── config/             # Configuración
│   └── database/           # TypeORM entities y seeds
```

---

## 🤖 Desarrollo AI Service (FastAPI)

### Iniciar servidor de desarrollo
```bash
cd apps/ai-service
source venv/bin/activate
uvicorn app.main:app --reload
```

### Documentación interactiva
```
http://localhost:8000/docs  # Swagger UI
http://localhost:8000/redoc # ReDoc
```

### Estructura del AI service
```
apps/ai-service/
├── app/
│   ├── main.py              # FastAPI app
│   ├── config.py            # Configuración
│   ├── routers/
│   │   ├── chatbot.py       # Endpoint de chatbot
│   │   ├── moderation.py    # Moderación de contenido
│   │   └── recommendations.py # Recomendaciones
│   ├── services/
│   │   ├── openai_service.py
│   │   ├── pinecone_service.py
│   │   └── embeddings.py
│   └── models/              # Pydantic models
```

---

## 🌐 Desarrollo Web (Next.js)

### Iniciar servidor de desarrollo
```bash
cd apps/web
npm run dev
# Abrir http://localhost:3001
```

### Estructura del proyecto web
```
apps/web/
├── app/                    # Next.js 14 App Router
│   ├── dashboard/         # Panel de vendedores
│   ├── admin/             # Panel administrativo
│   └── layout.tsx
├── components/            # Componentes React
├── hooks/                 # Custom hooks
├── services/              # API clients
└── public/                # Assets estáticos
```

---

## 🧪 Testing

### Backend tests
```bash
cd apps/backend
npm run test              # Unit tests
npm run test:e2e          # End-to-end tests
npm run test:cov          # Con cobertura
```

### Mobile tests
```bash
cd apps/mobile
npm test
```

### Web tests
```bash
cd apps/web
npm test
```

---

## 🐳 Docker

### Iniciar todos los servicios
```bash
npm run docker:up
```

### Ver logs
```bash
docker-compose logs -f backend
docker-compose logs -f ai-service
```

### Detener servicios
```bash
npm run docker:down
```

### Reconstruir imágenes
```bash
docker-compose build --no-cache
```

---

## 📊 Base de datos

### Conectar a PostgreSQL
```bash
docker exec -it parche-queer-postgres psql -U parche_user -d parche_queer_db
```

### Conectar a MongoDB
```bash
docker exec -it parche-queer-mongodb mongosh -u parche_user -p parche_password_2024
```

### Conectar a Redis
```bash
docker exec -it parche-queer-redis redis-cli
```

### Backup PostgreSQL
```bash
docker exec parche-queer-postgres pg_dump -U parche_user parche_queer_db > backup.sql
```

### Restaurar PostgreSQL
```bash
cat backup.sql | docker exec -i parche-queer-postgres psql -U parche_user -d parche_queer_db
```

---

## 🔧 Troubleshooting

### Error: Puerto ya en uso
```bash
# Encontrar proceso
lsof -i :3000  # Backend
lsof -i :8000  # AI Service
lsof -i :3001  # Web

# Matar proceso
kill -9 <PID>
```

### Error: Docker no inicia
```bash
# Limpiar contenedores
docker-compose down -v
docker system prune -a

# Reiniciar Docker Desktop
```

### Error: Migraciones fallan
```bash
cd apps/backend
npm run migration:revert  # Deshacer última migración
npm run migration:run     # Volver a ejecutar
```

### Error: Expo no conecta
```bash
# Limpiar cache
cd apps/mobile
expo start -c
```

---

## 📚 Recursos útiles

- [NestJS Docs](https://docs.nestjs.com)
- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Expo Docs](https://docs.expo.dev)
- [Next.js Docs](https://nextjs.org/docs)
- [FastAPI Docs](https://fastapi.tiangolo.com)
- [TypeORM Docs](https://typeorm.io)
- [Socket.io Docs](https://socket.io/docs/v4/)

---

## 🚦 Checklist de desarrollo

- [ ] Configurar `.env` con todas las credenciales
- [ ] Iniciar Docker Compose (PostgreSQL, MongoDB, Redis)
- [ ] Ejecutar migraciones
- [ ] Iniciar backend (NestJS)
- [ ] Iniciar AI service (FastAPI)
- [ ] Iniciar mobile (Expo)
- [ ] Iniciar web (Next.js)
- [ ] Verificar conexión a bases de datos
- [ ] Probar autenticación JWT
- [ ] Probar WebSocket de chat
- [ ] Probar integración de pagos (Wompi sandbox)
- [ ] Probar chatbot con OpenAI

---

¿Problemas? Abre un issue en GitHub o contacta al equipo de desarrollo.
