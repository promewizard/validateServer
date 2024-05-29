const crypto = require("crypto");

// Function to encrypt a string
function encrypt(text, secretKey) {
  const iv = crypto.randomBytes(16); // Initialization vector
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(secretKey, "hex"),
    iv
  );
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return iv.toString("hex") + ":" + encrypted;
}

// Function to decrypt a string
function decrypt(encryptedText, secretKey) {
  const [ivHex, encrypted] = encryptedText.split(":");
  const iv = Buffer.from(ivHex, "hex");
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(secretKey, "hex"),
    iv
  );
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

// Example usage
// Pad the secret key to 32 bytes (256 bits)
const secretKey =
  "133c8eb86cf813474ade739d5d133087e2026f56aaf366284dd1a25d98d44690"; //crypto.createHash("sha256").update("validate").digest("hex");

// String to encrypt
const textToEncrypt = "https://validateserver.onrender.com/crash";

// Encrypt the string
const encryptedText = encrypt(textToEncrypt, secretKey);

const decryptedText = decrypt(encryptedText, secretKey);
console.log("Encrypted Text:", encryptedText);
console.log("Decrypted Test:", decryptedText);
console.log("Secret Key:", secretKey);
