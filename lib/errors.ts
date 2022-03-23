const NotInitialized = () => {
  throw new Error("sdk must be initialized");
};

const PublicKeyRequired = () => {
  throw new Error("publicKey is required");
};

const errors = {
  NotInitialized,
  PublicKeyRequired,
};

export default errors;
