export const BOOK_STATUS = {
  PENDING: "pending",
  IN_PROGRESS: "in progress",
  READ: "read",
}

export const STATUS_LABELS = {
  [BOOK_STATUS.PENDING]: "Pendiente",
  [BOOK_STATUS.IN_PROGRESS]: "En progreso",
  [BOOK_STATUS.READ]: "Leído",
}

export const STATUS_COLORS = {
  [BOOK_STATUS.PENDING]: "#f59e0b",
  [BOOK_STATUS.IN_PROGRESS]: "#3b82f6",
  [BOOK_STATUS.READ]: "#10b981",
}

export const VALIDATION_RULES = {
  TITLE: { MIN_LENGTH: 1, MAX_LENGTH: 200 },
  AUTHOR: { MIN_LENGTH: 1, MAX_LENGTH: 100 },
  YEAR: { MIN: 1000, MAX: new Date().getFullYear() + 10 },
}

export const UI_MESSAGES = {
  LOADING: "Cargando...",
  ERROR_GENERIC: "Ha ocurrido un error inesperado",
  SUCCESS_BOOK_ADDED: "Libro agregado correctamente",
  SUCCESS_BOOK_UPDATED: "Libro actualizado correctamente",
  SUCCESS_BOOK_DELETED: "Libro eliminado correctamente",
  CONFIRM_DELETE: "¿Estás seguro de que quieres eliminar este libro?",
  EMPTY_STATE: "No hay libros en tu colección",
}