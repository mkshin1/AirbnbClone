test("saves keyring id", async () => {
  const User = await defineModel({
    keys: { "1": "uDiMcWVNTuz//naQ88sOcN+E40CyBRGzGTT7OkoBS6M=" },
  });

  const user = await User.create({ email: "EMAIL", secret: "SECRET" });
  await user.reload();

  assert.equal(user.keyring_id, 1);
});

("##########################################################################################");

test("rotates key", async () => {
  const keys = { "1": "uDiMcWVNTuz//naQ88sOcN+E40CyBRGzGTT7OkoBS6M=" };
  const User = await defineModel({ keys });
  const user = await User.create({ email: "EMAIL", secret: "SECRET" });

  keys[2] = "VN8UXRVMNbIh9FWEFVde0q7GUA1SGOie1+FgAKlNYHc=";

  await user.save();
  await user.reload();

  assert.equal(user.keyring_id, 2);
});

("##########################################################################################");

test("updates record", async () => {
  const User = await defineModel({
    keys: { "1": "uDiMcWVNTuz//naQ88sOcN+E40CyBRGzGTT7OkoBS6M=" },
  });

  const user = await User.create({ email: "EMAIL", secret: "SECRET" });

  await user.update({ email: "NEW EMAIL", secret: "NEW SECRET" });
  await user.reload();

  assert.equal(user.email, "NEW EMAIL");
  assert.equal(user.email_digest, sha1("NEW EMAIL", { digestSalt: "" }));
  assert.equal(user.secret, "NEW SECRET");
});

("##########################################################################################");

test("encrypts multiple attributes", async () => {
  const User = await defineModel({
    keys: { "1": "uDiMcWVNTuz//naQ88sOcN+E40CyBRGzGTT7OkoBS6M=" },
  });

  const user = await User.create({ email: "EMAIL", secret: "SECRET" });
  await user.reload();

  assert.equal(user.email, "EMAIL");
  assert.equal(user.secret, "SECRET");

  assert.notEqual(user.encrypted_email, "EMAIL");
  assert.notEqual(user.encrypted_secret, "SECRET");
});
