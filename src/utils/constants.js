export const BOOK_STATUS = {
  PENDING: 'pending',
  IN_PROGRESS: 'in progress',
  READ: 'read',
};

export const STATUS_LABELS = {
  [BOOK_STATUS.PENDING]: 'Pending',
  [BOOK_STATUS.IN_PROGRESS]: 'In progress',
  [BOOK_STATUS.READ]: 'Read',
};

export const STATUS_COLORS = {
  [BOOK_STATUS.PENDING]: '#f59e0b',
  [BOOK_STATUS.IN_PROGRESS]: '#3b82f6',
  [BOOK_STATUS.READ]: '#10b981',
};

export const VALIDATION_RULES = {
  TITLE: { MIN_LENGTH: 1, MAX_LENGTH: 200 },
  AUTHOR: { MIN_LENGTH: 1, MAX_LENGTH: 100 },
  YEAR: { MIN: 1000, MAX: new Date().getFullYear() + 10 },
};

export const UI_MESSAGES = {
  LOADING: 'Loading...',
  ERROR_GENERIC: 'An unexpected error has occurred',
  SUCCESS_BOOK_ADDED: 'Book added successfully',
  SUCCESS_BOOK_UPDATED: 'Book updated successfully',
  SUCCESS_BOOK_DELETED: 'Book deleted successfully',
  CONFIRM_DELETE: 'Are you sure you want to delete this book?',
  EMPTY_STATE: 'There are no books in your collection',
};
