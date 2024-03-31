module.exports = {
  apps: [
    {
      name: "prod-olim-daftar",
      script: "yarn",
      args: "start",
      cwd: "/var/www/olim-register",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};
