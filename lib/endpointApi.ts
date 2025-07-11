const ApiUrl = {
  auth: {
    register: "/auth/register",
    login: "/auth/login",
    logout: "/auth/logout",
  },
  user: {
    profile: "/user/info-user",
    updateProfile: "/user/update/{userId}",
  },
  flashcard: {
    foldersByUserId: "/api/Flashcard/flashcard-folders/{userId}",
    setsByFolderId: "/api/Flashcard/flashcard-sets/folder/{folderId}",
    setsByUserId: "/api/Flashcard/flashcard-sets/user/{userId}",
    setDetails: "/api/Flashcard/flashcard-set/details/{setId}",
    setById: "/api/Flashcard/flashcard/set/{setId}",
    favoritesByUserId: "/api/Flashcard/flashcard/favorites/{userId}",
    gameResultByUser: "/api/Flashcard/flashcard/game-result/user/{userId}",
    gameResultBySet: "/api/Flashcard/flashcard/game-result/set/{setId}",

    createFolder: "/api/Flashcard/flashcard-folder",
    createSet: "/api/Flashcard/flashcard-set",
    createFlashcard: "/api/Flashcard/flashcard",
    createGameResult: "/api/Flashcard/flashcard/game/result",

    toggleFavorite: "/api/Flashcard/flashcard/{id}/favorite",
    updateFolderName: "/api/Flashcard/flashcard/folder-name/{id}",
    updateSetName: "/api/Flashcard/flashcard/set-name/{id}",

    deleteFolder: "/api/Flashcard/flashcard-folder-delete/{id}",
    deleteSet: "/api/Flashcard/flashcard-set-delete/{id}",
    deleteFlashcard: "/api/Flashcard/flashcard-delete/{id}",
  },
};

export default ApiUrl;
