const { onCall } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");
const admin = require("firebase-admin");

admin.initializeApp();

setGlobalOptions({ maxInstances: 10 });

exports.deleteProject = onCall(async (request) => {

  const projectId = request.data.projectId;

  if (!projectId) {
    throw new Error("No se recibió projectId");
  }

  await admin
    .firestore()
    .collection("projects")
    .doc(projectId)
    .delete();

  return {
    success: true,
    message: "Proyecto eliminado correctamente"
  };
});