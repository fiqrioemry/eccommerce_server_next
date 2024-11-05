const { UserProfiles } = require("../../models");

module.exports = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { name, address } = req.body;
    const userProfiles = await UserProfiles.findOne({
      where: { userId },
    });

    if (!userProfiles) {
      return res.status(400).send({ message: "User is not found" });
    }

    // Flag untuk melacak jika ada perubahan
    let isUpdated = false;

    // Cek dan update field name jika berbeda
    if (name && name !== userProfiles.name) {
      userProfiles.name = name;
      isUpdated = true;
    }

    // Cek dan update field address jika berbeda
    if (address && address !== userProfiles.address) {
      userProfiles.address = address;
      isUpdated = true;
    }

    // Jika ada perubahan, simpan dan kirim respon
    if (isUpdated) {
      await userProfiles.save();
      return res.status(200).send({ message: "Profile updated successfully" });
    } else {
      return res.status(200).send({ message: "There is no data changed" });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
