const path = require("path");

const printWithLeftPadding = (message, paddingLength) =>
  console.log(message.padStart(message.length + paddingLength));

class UnderstandingChunkGraphPlugin {
  apply(compiler) {
    const className = this.constructor.name;
    compiler.hooks.compilation.tap(className, (compilation) => {
      compilation.hooks.afterChunks.tap(className, (chunks) => {
        const { entrypoints } = compilation;

        const {
          chunkGraph: { _chunks: chunkMap },
        } = compilation;

        const printChunkGroupsInformation = (chunkGroup, paddingLength) => {
          printWithLeftPadding(
            `Current ChunkGroup's name: ${chunkGroup.name};`,
            paddingLength,
          );
          printWithLeftPadding(
            `Is current ChunkGroup an EntryPoint? - ${
              chunkGroup.constructor.name === "Entrypoint"
            }`,
            paddingLength,
          );

          const allModulesInChunkGroup = chunkGroup.chunks
            .flatMap((c) => {
              const associatedGraphChunk = chunkMap.get(c);

              return [...associatedGraphChunk.modules];
            })
            .map((module) => path.basename(module.resource));
          printWithLeftPadding(
            `The modules that belong to this chunk group: ${allModulesInChunkGroup.join(", ")}`,
            paddingLength,
          );

          console.log("\n");

          [...chunkGroup._children].forEach((childChunkGroup) =>
            printChunkGroupsInformation(childChunkGroup, paddingLength + 3),
          );
        };

        for (const [entryPointName, entryPoint] of entrypoints) {
          printChunkGroupsInformation(entryPoint, 0);
        }
      });
    });
  }
}

module.exports = UnderstandingChunkGraphPlugin;
