'use client';

import { motion } from 'framer-motion';

interface FlowNode {
  id: string;
  label: string;
  emoji?: string;
  color: string;
  description?: string;
}

interface FlowConnection {
  from: string;
  to: string;
}

interface FlowChartProps {
  nodes: FlowNode[];
  connections: FlowConnection[];
  title?: string;
}

export default function FlowChart({ nodes, connections, title }: FlowChartProps) {
  return (
    <div className="relative">
      {title && (
        <h4 className="text-2xl font-display font-bold text-inkBlue mb-8 text-center">
          {title}
        </h4>
      )}
      <div className="flex flex-col items-center gap-8">
        {nodes.map((node, index) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="w-full max-w-md"
          >
            <div className={`relative bg-gradient-to-br ${node.color} rounded-3xl p-6 shadow-xl border-4 border-opacity-50 hover:scale-105 transition-transform`}>
              {node.emoji && (
                <div className="text-5xl mb-3 text-center">{node.emoji}</div>
              )}
              <div className="text-xl font-display font-bold text-inkBlue text-center mb-2">
                {node.label}
              </div>
              {node.description && (
                <div className="text-sm text-gray-700 text-center">
                  {node.description}
                </div>
              )}
            </div>
            {index < nodes.length - 1 && (
              <div className="flex justify-center my-4">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <path
                    d="M20 5 L20 35 M15 30 L20 35 L25 30"
                    stroke="#f8ad7a"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
