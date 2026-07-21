module.exports = {
  apps: [
    {
      name: "vip-networks",
      script: "./dist/index.cjs",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
        PORT: 3017,
        DATABASE_URL: "postgresql://postgres:password@helium/heliumdb?sslmode=disable",
        SESSION_SECRET: "dFCXiABW39RrD2UwZZc/ZFg7IlPhoMsqbWIG1qa9BcTDUy9GgxmJvnrcrR0uS11aYQB7drAxeliEZeOT/uR+sg==",
      },
    },
  ],
};
